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


  const base = {
    bundle: true,
    plugins: [stylePlugin(), assetPlugin()],
    format: 'esm',
    splitting: false,
    minify: true,
    legalComments:'none',
    jsx:'preserve'
  }


  await build({
    entryPoints: glob.sync("src/components/*/index.ts", {cwd: resolve(uiDir)}).map(com => resolve(uiDir, com)),
    outdir: `${dist}/components/avm-ui`, ...base
  })

  await build({
    entryPoints: [resolve(uiDir, 'src/demos/index.ts')],
    outdir: `${dist}/components/avm-ui/demos`, ...base
  })


}