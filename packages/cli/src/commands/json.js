import glob from "glob";
import {resolve} from "path";
import {uiDir} from "../index.js";
import fse from "fs-extra";

const IDEPrefix = 'Ant';
const ComponentPrefix = 'avm';

export function onJSON() {
  const jsons = glob.sync(`${resolve(uiDir)}/src/components/!(icon)/**.json`);
  const jsonMap = {};

  jsons.forEach(json => {
    const name = json.replace('.json', '').split('/').pop();
    try {
      if (/[A-Z]/.test(name)) {
        console.log(`${name} 组件名称不符合规范，包含了大写字母`)
      } else {
        const jsonContent = JSON.parse(fse.readFileSync(json).toString());
        jsonContent.component = IDEPrefix + jsonContent.component;
        processContent(jsonContent);
        jsonMap[`${ComponentPrefix}-${name}`] = jsonContent;
      }
    } catch (e) {
      console.log(`出错了`, name)
    }
  })

  // console.log(jsonMap)
  try {
    // const savePath = resolve(uiDir, '../../', 'avm-component.json');
    const savePath = resolve('/Users/c/Documents/yonyou/lowcode/git/low-code/src/avm-components/avm-component.json');
    fse.writeJSONSync(savePath, jsonMap, {spaces: 2});
    console.log(`文件输出在${savePath}，文件大小：${fse.statSync(savePath).size / 1000} KB`)

  } catch (e) {
    console.log(e)
  }
}


function processContent(jsonContent) {
  if (jsonContent.parent) {
    jsonContent.parent = ComponentPrefix + '-' + jsonContent.parent;
  }

  jsonContent.props = jsonContent.props.map(prop => {
    const desc = `[${jsonContent.component}] 的 [${prop.name}]`;
    if (prop.type) {
      if (~prop.type.indexOf('[]')) {
        console.warn(`${desc} 的 type 不规范的数组，缺省为 array 。`);
        prop.type = 'array';// 修改为 array
      } else if (!['string', 'boolean', 'number', 'array'].includes(prop.type)) {
        console.warn(`${desc} 的 type 是 ${prop.type}，缺省为 string 。`);
        prop.type = 'string';// 修改为 string
      } else if (prop.type === 'boolean') {
        if (prop.enum) {
          console.warn(`${desc} 的 type 是 boolean，不需要 enum  。`);
          delete prop.enum;
        }
      }
    } else {
      console.warn(`${desc} 的 type 未声明，缺省为 string 。`);
      prop.type = 'string';// 修改为 string
    }

    const newEvent = [];
    if (jsonContent.event) {
      jsonContent.event.forEach(item => {
        if (item.startsWith('on')) {
          console.warn(`${desc} 的 event ${item} 是以 on 开头的，应该去掉 on 。`);
          item = item.slice(2);
          item = item[0].toLowerCase() + item.slice(1);
        }

        if (['longpress', 'click', 'touchstart', 'touchmove', 'touchend', 'touchcancel'].includes(item)) {
          console.warn(`${desc} 的 event 是 通用事件:${item} ，需要去掉 。`);
        } else {
          newEvent.push(item)
        }

      })
    }
    jsonContent.event = newEvent;

    return prop;
  })
}
