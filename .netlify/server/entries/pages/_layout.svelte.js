import { c as create_ssr_component, e as escape, b as add_attribute, v as validate_component } from "../../chunks/index2.js";
const PageHeader_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "@-moz-document url-prefix(){}@media not all and (-moz-windows-compositor){.last.svelte-r0toxr.svelte-r0toxr{margin-left:-2.2rem}}header.svelte-r0toxr.svelte-r0toxr{position:fixed;display:flex;top:0;left:0;width:100%;top:0;padding:0.5rem;z-index:1000;margin:0;background-image:linear-gradient(var(--nav-background) 5rem,var(--primary-hover));border-bottom:solid var(--primary-hover) 1px;--mask:conic-gradient(from -45deg at bottom,#0000,#000 1deg 90deg,#0000 91deg) 50% / 60px 100%;-webkit-mask:var(--mask);mask:var(--mask)}ul.svelte-r0toxr.svelte-r0toxr{margin:0;display:flex;flex-wrap:wrap;justify-content:space-evenly}.logo.svelte-r0toxr.svelte-r0toxr{display:inline-block;width:80vw}.first.svelte-r0toxr.svelte-r0toxr:first-letter{font-size:3rem;padding:0;margin-bottom:-10px}.middle.svelte-r0toxr.svelte-r0toxr:first-letter{color:var(--middle-letter);font-size:3rem;padding:0;margin-bottom:-10px}.first.svelte-r0toxr.svelte-r0toxr{writing-mode:vertical-rl;text-orientation:upright;display:inline;vertical-align:top;padding:0;margin-top:0px}.middle.svelte-r0toxr.svelte-r0toxr{writing-mode:vertical-rl;margin-left:-3.6rem;text-orientation:upright;display:inline;vertical-align:top;padding:0;margin-top:0px;margin-bottom:2rem}.last.svelte-r0toxr.svelte-r0toxr{font-size:3rem;padding:0;color:var(--green);display:inline-block;margin-left:-2.2rem;vertical-align:top}.hide.svelte-r0toxr.svelte-r0toxr{display:none}nav.svelte-r0toxr.svelte-r0toxr{display:flex;flex-wrap:wrap;justify-content:space-around;align-content:space-around;padding:0;margin-bottom:1.5rem;width:100%}nav.svelte-r0toxr ul.svelte-r0toxr{list-style-type:none}nav.svelte-r0toxr li.svelte-r0toxr{border-radius:5px;border:var(--primary-hover) dotted 3px;background-color:var(--nav-background);padding:20px;margin:5px}nav.svelte-r0toxr li.svelte-r0toxr:hover{border:solid 3px var(--primary-hover)}",
  map: null
};
const PageHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let hideClass = "hide";
  $$result.css.add(css$3);
  return `<header id="hidebutton" class="svelte-r0toxr"><div class="logo svelte-r0toxr"><span class="first svelte-r0toxr">d<span class="${escape(hideClass, true) + " animate blur svelte-r0toxr"}">avid</span></span><span class="middle svelte-r0toxr">d<span class="${"" + escape(hideClass, true) + " animate blur svelte-r0toxr"}">ouglas</span></span><span class="last svelte-r0toxr" id="last">smit</span>
        </div>
    <nav class="${"" + escape(hideClass, true) + " animate drop svelte-r0toxr"}"><ul class=" svelte-r0toxr"><a href="/"><li class="svelte-r0toxr">Home</li></a>
            <a href="/Thoughts"><li class="svelte-r0toxr">Thoughts</li></a>
            <a href="/History"><li class="svelte-r0toxr">History</li></a>
            
            <a href="/Future"><li class="svelte-r0toxr">Future</li></a></ul></nav></header>`;
});
const PageFooter_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "footer.svelte-1oi5snz{display:flex;flex-wrap:wrap;justify-content:space-evenly;align-content:space-around;padding:1.5rem;margin-top:3rem;width:100%;border-top:solid 1px var(--primary-hover)}",
  map: null
};
const PageFooter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<footer class="svelte-1oi5snz"><div><a href="https://fosstodon.org/@ddsmit">🐘 Mastadon</a></div>
    <a href="https://github.com/ddsmit">💾 GitHub</a>
    <a href="https://www.linkedin.com/in/david-smit-b8220ba6/">👨🏻‍💼 LinkedIn</a></footer>`;
});
const Me_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "img.closed.svelte-1wxxxuf{width:15vw;rotate:180deg;left:25vw;top:-15vw;position:fixed;display:none;z-index:10}img.menu.svelte-1wxxxuf{width:15vw;rotate:180deg;left:25vw;top:-10vw;position:fixed;display:block;z-index:10}img.menu.svelte-1wxxxuf{animation-name:svelte-1wxxxuf-menu-animate;animation-duration:0.5s}img.closed.svelte-1wxxxuf{animation-name:svelte-1wxxxuf-close-animate;animation-timing-function:cubic-bezier(.77, .14, .91, 1.25);animation-duration:0.5s}@keyframes svelte-1wxxxuf-close-animate{0%{transform:translate(0, 0vw)}100%{transform:translate(0, 2vw)}}@keyframes svelte-1wxxxuf-menu-animate{0%{transform:translate(0, 6vw)}100%{transform:translate(0, 0vw)}}",
  map: null
};
let myPosition = "closed";
const Me = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { path } = $$props;
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  $$result.css.add(css$1);
  return `<img alt="My current favorite image of myself per my 8 yo daughter"${add_attribute("src", path, 0)} class="${escape(myPosition, true) + " menu-animate svelte-1wxxxuf"}">`;
});
const animation = "";
const main = "";
function client_method(key) {
  {
    if (key === "before_navigate" || key === "after_navigate" || key === "on_navigate") {
      return () => {
      };
    } else {
      const name_lookup = {
        disable_scroll_handling: "disableScrollHandling",
        preload_data: "preloadData",
        preload_code: "preloadCode",
        invalidate_all: "invalidateAll"
      };
      return () => {
        throw new Error(`Cannot call ${name_lookup[key] ?? key}(...) on the server`);
      };
    }
  }
}
const onNavigate = /* @__PURE__ */ client_method("on_navigate");
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".svelte-13nv9pr{margin:0;padding:0}.layout-container.svelte-13nv9pr{min-height:100vh;min-height:100dvh;display:grid;grid-template-rows:1fr \n      auto}main.svelte-13nv9pr{max-width:1100px;width:90vw;margin-left:auto;margin-right:auto;margin-top:6rem}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  onNavigate((navigation) => {
    if (!document.startViewTransition)
      return;
    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
  const mePath = new URL("../assets/img/dave.png", import.meta.url).href;
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-17g8xn4_START --><link rel="stylesheet" href="https://unpkg.com/@picocss/pico@latest/css/pico.min.css" class="svelte-13nv9pr"><!-- HEAD_svelte-17g8xn4_END -->`, ""}
 







<div class="layout-container svelte-13nv9pr">${validate_component(PageHeader, "PageHeader").$$render($$result, {}, {}, {})}
  
  <main class="svelte-13nv9pr">${slots.default ? slots.default({}) : ``}</main>
  ${validate_component(PageFooter, "PageFooter").$$render($$result, {}, {}, {})}
  ${validate_component(Me, "Me").$$render($$result, { path: mePath }, {}, {})}</div>`;
});
export {
  Layout as default
};
