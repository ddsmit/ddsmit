import { c as create_ssr_component, d as subscribe } from "../../../chunks/index.js";
import { p as page } from "../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let currentPage = $page.url.pathname;
  console.log("page", currentPage);
  $$unsubscribe_page();
  return `<h1>My Open Source Landfill for My Mind</h1>
<p>I have a goal to document more of <a href="/Thoughts/TIL">what I learn</a> as well
  as any information I agregate throughout the day. By sharing as much as I can, I hope
  that I can help someone. Worst case, I have a nice, generally available notepad.
</p>
<p>I&#39;m also planning to write about anything else I think is interesting/worth documenting. So often, I think tech people get stuck on
  tech, but I am a human with lots of different interests. 
</p>`;
});
export {
  Page as default
};
