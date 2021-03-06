import fse from 'fs-extra';
import {resolve} from 'path';

import {dist} from "../index.js";

export async function onWidget() {

  // 1. 重置输出目录
  fse.ensureDirSync(dist);
  fse.emptyDirSync(dist);
  // 2. 创建 config.xml
  fse.outputFileSync(resolve(dist, 'config.xml'), createConfigXml());
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




