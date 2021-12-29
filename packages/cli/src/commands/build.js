import fse from 'fs-extra';
import {resolve} from 'path';
import cp from 'child_process';

import {build} from "esbuild";
import {lessLoader} from 'esbuild-plugin-less';


const uiDir = `packages/avm-ui`;
const dist = './_widget';


export async function onBuild() {

  // 1. 重置输出目录
  fse.ensureDirSync(dist);
  fse.emptyDirSync(dist);
  // 2. 创建 config.xml
  fse.outputFileSync(resolve(dist, 'config.xml'), createConfigXml());
  // 3. 创建 components 到 widget
  buildComponentToWidget();
  // 4. 创建pages
  createPagesFromDemos();
}

import xml2js from 'xml2js';

function createConfigXml() {
  const builder = new xml2js.Builder();


  return builder.buildObject({
    widget: {
      $: {id: "A6183702447528", version: "0.0.1"},
      content: {$: {"src": "pages/main/main.stml"}},
      name: "AVM-UI",
      description: "Example For APICloud.",
      author: {
        _: "Developer",
        $: {"email": "developer@apicloud.com", "href": "http://www.apicloud.com"}
      },
      access: {$: {"origin": "*"}},
      preference: [
        {$: {name: "avm", value: true}},
        {$: {name: "pageBounce", value: false}},
        {$: {name: "appBackground", value: "#FFF"}},
        {$: {name: "windowBackground", value: "rgba(0,0,0,0.0)"}},
        {$: {name: "frameBackgroundColor", value: "rgba(0,0,0,0.0)"}},
        {$: {name: "hScrollBarEnabled", value: false}},
        {$: {name: "vScrollBarEnabled", value: false}},
        {$: {name: "autoLaunch", value: true}},
        {$: {name: "fullScreen", value: false}},
        {$: {name: "autoUpdate", value: true}},
        {$: {name: "smartUpdate", value: true}},
        {$: {name: "debug", value: true}},
        {$: {name: "statusBarAppearance", value: true}},
        {$: {name: "font", family: "avm-ui-icon", value: "widget/components/avm-ui/avm-ui-icon.ttf"}},
      ],
      permission: [
        {$: {name: "readPhoneState"}},
        {$: {name: "camera"}},
        {$: {name: "record"}},
        {$: {name: "location"}},
        {$: {name: "fileSystem"}},
        {$: {name: "internet"}},
        {$: {name: "bootCompleted"}},
        {$: {name: "hardware"}}
      ]
    }
  });
}

function buildComponentToWidget() {

  try {

    const cmd = `cd ${uiDir} && tsc && vite build --mode single`;
    console.log(`running ${cmd}`);
    const data = cp.execSync(cmd);
    console.log(data.toString());
    const dest = `${dist}/components`;
    fse.copySync(`${uiDir}/widget/components`, dest, {});
    console.log(`components copied to ${dest}`);
  } catch (e) {
    console.log("buildComponentToWidget error", e);
  }

}

import glob from 'glob'

const assetsLoader = {
  name: 'assets',
  setup(build) {
    build.onResolve({filter: /\.png|\.svg$/}, args => {
      console.log(args)
      return {
        path: 'a.png',
        external: true,
      }
    })
  },
}

async function createPagesFromDemos() {
  const demos = glob.sync("src/components/*/demos/*.tsx", {cwd: resolve(uiDir)});

  const files = demos.map(demo => resolve(uiDir, demo));

  console.log(files)

  await build({
    entryPoints: files, 
    outdir: 'out',
    bundle: true,
    plugins: [lessLoader(), assetsLoader]
  })

}





async function genPageCode(path = 'src/components/button/demos/index.tsx') {
  const file = resolve(uiDir, path);

  console.log(file);

  await build({
    entryPoints: [file],
    outfile: 'out.js',
    bundle: true,
    plugins: [lessLoader(), assetsLoader]
  })


}