const fse = require('fs-extra');
const {resolve} = require('path');


export async function onBuild() {

  const dist = './widget';

  fse.ensureDirSync(dist);
  fse.emptyDirSync(dist);

  fse.outputFileSync(resolve(dist, 'config.xml'), createConfigXml());

  createPagesFromDemos();
}


function createConfigXml() {
  const xml2js = require('xml2js');
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

function buildComponentToWidget(){
  
}

function createPagesFromDemos() {
  const glob = require("glob");
  const pages = glob.sync("components/*/demos/*.tsx",{cwd:resolve('./packages/avm-ui/src')});

  console.log(pages)

}