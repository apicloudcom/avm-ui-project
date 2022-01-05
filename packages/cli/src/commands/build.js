import {build} from "esbuild";
import glob from "glob";
import {resolve} from "path";
import {dist, uiDir} from "../index.js";
import stylePlugin from "esbuild-style-plugin";


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


export async function onBuild(cmd = {}) {

  const entryPoints = glob.sync("src/components/*/index.ts", {cwd: resolve(uiDir)})
    // .concat(['src/demos/index.ts'])
    .map(com => resolve(uiDir, com))

  const result = await build({
    entryPoints,
    outdir: `${dist}/components/avm-ui`,
    bundle: true,
    plugins: [stylePlugin(), assetPlugin()],
    format: 'esm',
  })

  console.log(result)
}