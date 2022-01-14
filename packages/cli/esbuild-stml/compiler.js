import {parse} from "@vue/component-compiler-utils";
import templateCompiler from "vue-template-compiler";
import hash from "hash-sum";
import path from "path";



export async function compileToDescriptorAsync(filename, source) {
  const descriptor = parse({
    source,
    filename,
    needMap: false,
    compiler: templateCompiler,
  });
  const scopeId =
    "data-v-" +
    (this.template.isProduction
      ? hash(path.basename(filename) + source)
      : hash(filename + source));
  const template = descriptor.template
    ? this.compileTemplate(filename, descriptor.template)
    : undefined;
  const styles = await Promise.all(
    descriptor.styles.map((style) =>
      this.compileStyleAsync(filename, scopeId, style)
    )
  );
  const {script: rawScript, customBlocks} = descriptor;
  const script = rawScript
    ? {
      code: rawScript.src
        ? this.read(rawScript.src, filename)
        : rawScript.content,
      map: rawScript.map,
      lang: rawScript.lang,
    }
    : undefined;

  return {
    scopeId,
    template,
    styles,
    script,
    customBlocks,
  };
}
