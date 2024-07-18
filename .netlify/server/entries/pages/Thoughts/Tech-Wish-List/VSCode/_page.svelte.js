import { c as create_ssr_component } from "../../../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h3>Add Additional Types to Tab Undocking</h3>
<p>I love, love, love the ability to drag a tab out of the main VSCode window into another
    window (fits how I like to work so much better), but it does make me a bit sad that a preview window (at least for markdown with mermaidjs) and notebooks (ipynb)
    are not able to be undocked.
</p>
<h4>Preview Windows</h4>
<p>For the preview window, it would get pretty cramped with larger mermaid charts on a split screen,
    and the ability to seperate the source (markdown file) on a different window from the preview would make editing
    so much better. I was able to work around this a little bit by keeping the preview in the main window and the markdown 
    in the undocked window, but that becomes a problem in some cases.
</p>
<h4>Notebooks</h4>
<p>I ran into this issue specifically because I was documenting an older workflow that uses notebooks
    using mermaid. I moved the markdown to a new window, but I would have liked to be able to move my 
    notebook into another new window so I can see it, my preview, and the source of the preview.
</p>`;
});
export {
  Page as default
};
