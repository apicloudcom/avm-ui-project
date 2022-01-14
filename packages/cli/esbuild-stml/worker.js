


import componentCompiler from "@vue/component-compiler";
import {generateCodeFrame} from "vue-template-compiler";

// We use our own versions of compileToDescriptor until this PR is merged:
// https://github.com/vuejs/vue-component-compiler/pull/122

import { compileToDescriptorAsync,} from "./compiler.js";


let usedFiles;

export  default async ({
  filename,
  source,
  extractCss,
  production,
  postcssPlugins
}) => {
  const compiler = componentCompiler.createDefaultCompiler({
    template: {
      isProduction: production,
      compilerOptions: { outputSourceRange: false },
    },
    style: {
      postcssPlugins,
    },
  });
  usedFiles = new Set();
  try {
    if (/^\s*$/.test(source)) {
      throw new Error("File is empty");
    }
    const result = await compileToDescriptorAsync.call(compiler, filename, source);
    let styles;

    const resultErrors = getErrors(result);
    if (resultErrors.length > 0) {
      return { errors: resultErrors, usedFiles };
    }

    if (extractCss) {
      styles = result.styles.map(({ code }) => ({ code }));
      // Remove the style code to prevent it from being injected
      // in the JS bundle, but keep it as reference to preserve scopeId value.
      for (const style of result.styles) {
        style.code = "";
      }
    }

    const { code } = componentCompiler.assemble(compiler, filename, result, {});

    return {
      code,
      styles,
      usedFiles,
      loader: result.script?.lang,
    };
  } catch (e) {
    return {
      errors: [
        {
          text: `Could not compile Vue single-file component: ${e}`,
          detail: e,
        },
      ],
      usedFiles,
    };
  }
};

function getErrors(result) {
  let errors = [];
  if (result.template && result.template.errors) {
    errors = errors.concat(getTemplateErrors(result.template));
  }
  if (result.styles) {
    errors = errors.concat(combineErrors(result.styles));
  }
  return errors;
}

function getTemplateErrors(template) {
  if (!template.errors) {
    return [];
  }
  return template.errors.map((e) => ({
    text: e.msg + "\n\n" + generateCodeFrame(template.source, e.start, e.end),
    detail: e,
  }));
}

function combineErrors(outputs) {
  return outputs
    .map((o) => {
      if (!o || !o.errors) {
        return [];
      }
      return o.errors.map((e) => convertError(e));
    })
    .flat();
}

function convertError(e) {
  if (typeof e === "string") {
    return { text: e };
  }
  if (e instanceof Error) {
    return { text: e.message, detail: e };
  }
  throw new Error(`Cannot convert Vue compiler error: ${e}`);
}


