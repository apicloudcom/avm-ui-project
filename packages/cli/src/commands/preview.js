import fse from "fs-extra";
import {resolve} from "path";
import {dist, uiDir} from "../index.js";

export function onPreview(cmd) {
  if (process.argv[3]) {
    const name = process.argv[3];
    const srcPath = resolve(uiDir, `widget/pages/demo-${name}/demo-${name}.stml`);
    if (fse.existsSync(srcPath)) {
      fse.copySync(srcPath, resolve(dist, 'pages/main/main.stml'), {})
    } else {
      throw new Error(`demo 页面 ${name} 找不到: ${srcPath}`);
    }
  } else {
    throw Error("请传入页面");
  }
}