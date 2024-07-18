import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/index2.js";
import Prism from "prismjs";
/* empty css                                                           */const css = {
  code: ".code.svelte-1f90djm{white-space:pre-wrap;padding:3rem}",
  map: null
};
const Snippet = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { code } = $$props;
  let { language } = $$props;
  let selectedLanguage = language ? language : "javascript";
  let highlights = Prism.highlight(code, Prism.languages[selectedLanguage]);
  if ($$props.code === void 0 && $$bindings.code && code !== void 0)
    $$bindings.code(code);
  if ($$props.language === void 0 && $$bindings.language && language !== void 0)
    $$bindings.language(language);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-166l9gt_START --><link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.22.0/themes/prism-dark.min.css" rel="stylesheet"><!-- HEAD_svelte-166l9gt_END -->`, ""}

<div class="code svelte-1f90djm"><!-- HTML_TAG_START -->${highlights}<!-- HTML_TAG_END --></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h3>Add Conditional Syntax to a Normal For Loop</h3>
<p>Quite often, I am using a for loop with an if statement to output or process an item from an iterable based on a certain condition. 
    I really like the syntax from list comprehensions:
    ${validate_component(Snippet, "Snippet").$$render(
    $$result,
    {
      code: '\n    [\n        thing\n        for thing in things\n        if thing == "what I want"\n    ]\n    '
    },
    {},
    {}
  )}
    It would be great if you can simplify the use case where a loop is cleaner/required to be able to use the conditional right in the for statement:
    
    ${validate_component(Snippet, "Snippet").$$render(
    $$result,
    {
      code: '\nfor thing in things if thing == "what I want":\n    process_thing(thing)\n'
    },
    {},
    {}
  )}</p>`;
});
export {
  Page as default
};
