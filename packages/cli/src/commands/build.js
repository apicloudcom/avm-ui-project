import {build} from "esbuild";
import glob from "glob";
import {resolve} from "path";
import {dist, uiDir} from "../index.js";
import stylePlugin from "esbuild-style-plugin";
import fse from "fs-extra";

const outdir = (name = '') => resolve(`${dist}/components/avm-ui`, name);


const assetPlugin = options => {
  return {
    name: 'asset',
    setup(build) {
      build.onResolve({
        filter: /.png/
      }, args => {
        // console.log(args)
        return {
          external: true
        }
      })
    }
  }
}

async function copyFontToWidget() {
  fse.copyFileSync(resolve(uiDir, 'src/components/icon/_gen/dist/fonts/avm-icon.ttf'), outdir('icon/avm-icon.ttf'));
}

export async function onBuild(cmd = {}) {


  const minify = !cmd.dev;


  const base = {
    bundle: true,
    plugins: [stylePlugin(), assetPlugin()],
    format: 'esm',
    splitting: false,
    minify,
    legalComments: 'none',
    jsx: 'preserve'
  }


  await build({
    entryPoints: glob.sync("src/components/*/index.ts", {cwd: resolve(uiDir)}).map(com => resolve(uiDir, com)),
    outdir: outdir(),
    ...base,
    assetNames: '[name]'
  })

  await build({
    entryPoints: [resolve(uiDir, 'src/demos/index.ts')],
    outdir: outdir('demos'), ...base
  })

  await copyFontToWidget();


  if (minify) {
    const list = glob.sync(outdir() + '/**/*.js');

    await list.forEach(file => {
      const js = fse.readFileSync(file).toString();
      fse.writeFileSync(file, js.replace(/(css(.*)=>`[\s\S]*`)/g, str => {
        return str.replace(/[\r\n]|\s{2}|\t/g, "")
      }))
    })


  }

}