import glob from "glob";
import {resolve} from "path";
import {uiDir} from "../index.js";
import fse from "fs-extra";

export function onJSON() {
  const jsons = glob.sync(`${resolve(uiDir)}/src/components/*/*.json`,);
  const jsonMap = {};
  const IDEPrefix = 'Ant';
  const ComponentPrefix = 'avm';

  jsons.forEach(json => {
    const name = json.replace('.json', '').split('/').pop();
    try {
      if (/[A-Z]/.test(name)) {
        console.log(`${name} 组件名称不符合规范，包含了大写字母`)
      } else {
        const jsonContent = JSON.parse(fse.readFileSync(json).toString());
        jsonContent.component = IDEPrefix + jsonContent.component;
        if (jsonContent.parent) {
          jsonContent.parent = ComponentPrefix + '-' + jsonContent.parent;
        }
        jsonMap[`${ComponentPrefix}-${name}`] = jsonContent;
      }
    } catch (e) {
      console.log(`出错了`, name)
    }
  })

  // console.log(jsonMap)
  try {
    const savePath = resolve(uiDir, '../../', 'avm-component.json');

    fse.writeJSONSync(savePath, jsonMap, {spaces: 2});
    console.log(`文件输出在${savePath}，文件大小：${fse.statSync(savePath).size / 1000} KB`)

  } catch (e) {
    console.log(e)
  }
}
