import fse from "fs-extra";
import {resolve} from "path";
import {dist, uiDir} from "../index.js";
import {build} from "esbuild";
import stmlPlugin from '../../esbuild-stml/index.js'

export function onPreview(cmd) {
  if (process.argv[3]) {
    const name = process.argv[3];
    const srcPath = resolve(uiDir, `widget/pages/demo-${name}/demo-${name}.stml`);
    if (fse.existsSync(srcPath)) {
      
      const toPath = resolve(dist, 'pages/main/','main.stml');
      
      fse.copySync(srcPath, toPath, {})
      // buildSTML(toPath);
      
      
    } else {
      throw new Error(`demo 页面 ${name} 找不到: ${srcPath}`);
    }
  } else {
    throw Error("请传入页面");
  }
}


function buildSTML(toPath){
  build({
    entryPoints: [toPath],
    bundle: true,
    outfile: 'out.js',
    plugins: [stmlPlugin()],
    define: {
      "process.env.NODE_ENV": JSON.stringify("development"),
    },
    external:['vue']
  }).then((...r)=>console.log(r))
}