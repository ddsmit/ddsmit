import { c as create_ssr_component, f as each, b as add_attribute, e as escape } from "../../../chunks/index2.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".svelte-1hdl5n9.svelte-1hdl5n9{text-decoration:none}section.svelte-1hdl5n9.svelte-1hdl5n9{max-width:900px;margin:3rem;padding:1rem}.need-to-read.svelte-1hdl5n9.svelte-1hdl5n9{border:dashed 1px var(--green)}.read.svelte-1hdl5n9.svelte-1hdl5n9{border:grey solid 1px}.read.svelte-1hdl5n9>h3.svelte-1hdl5n9,.read.svelte-1hdl5n9>p.svelte-1hdl5n9{color:grey;text-decoration:line-through}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<h2 class="svelte-1hdl5n9">Need To Read</h2>
${each(data.readList, (read) => {
    return `${read.status == "needToRead" ? `<a${add_attribute("href", read.link, 0)} class="svelte-1hdl5n9"><section class="need-to-read svelte-1hdl5n9"><h3 class="svelte-1hdl5n9">${escape(read.metadata.title)}</h3>
            <p class="svelte-1hdl5n9">${escape(read.metadata.description)}</p></section>
    </a>` : ``}`;
  })}
<h2 class="svelte-1hdl5n9">Read</h2>
${each(data.readList, (read) => {
    return `${read.status == "read" ? `<a${add_attribute("href", read.link, 0)} class="svelte-1hdl5n9"><section class="read svelte-1hdl5n9">${read.recomend ? `👍🏻` : ``}
            <h3 class="svelte-1hdl5n9">${escape(read.metadata.title)}</h3>
            <p class="svelte-1hdl5n9">${escape(read.metadata.description)}</p></section>
    </a>` : ``}`;
  })}`;
});
export {
  Page as default
};
