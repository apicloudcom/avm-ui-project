import glob from "glob";
import {resolve} from "path";
import {uiDir} from "../index.js";
import fse from "fs-extra";

export function onJSON(){
  const jsons = glob.sync(`${resolve(uiDir)}/src/components/*/*.json`,);
  const jsonMap = {};
  
  jsons.forEach(json=>{
    const name = json.replace('.json','').split('/').pop();
    try {
      jsonMap[name] = JSON.parse(fse.readFileSync(json).toString());
    }catch (e){
      console.log(`出错了`,name)
    }
  })

  // console.log(jsonMap)
  fse.writeJsonSync(resolve(uiDir,'../../','avm-ui.json'),jsonMap);
}
