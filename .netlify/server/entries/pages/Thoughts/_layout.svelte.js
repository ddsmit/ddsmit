import { c as create_ssr_component, e as escape, f as each, v as validate_component, b as add_attribute, d as subscribe } from "../../../chunks/index.js";
import { p as page } from "../../../chunks/stores.js";
const Posterize_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "ul.svelte-1b1j5zx li.svelte-1b1j5zx{list-style-type:none}",
  map: null
};
function prettySlug(slug) {
  const no_thoughts = slug.replace("/Thoughts", "");
  const path_parts = no_thoughts.split("/");
  let stem = path_parts.pop();
  const [_, ...pp] = path_parts;
  const partial_path = pp.join(":");
  if (pp.length == 0) {
    return stem.replace("-", " ");
  }
  return `${partial_path}: ${stem.replace("-", " ")}`;
}
const Posterize = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { postData } = $$props;
  let { page: page2 } = $$props;
  if ($$props.postData === void 0 && $$bindings.postData && postData !== void 0)
    $$bindings.postData(postData);
  if ($$props.page === void 0 && $$bindings.page && page2 !== void 0)
    $$bindings.page(page2);
  $$result.css.add(css$1);
  return `${slots.default ? slots.default({}) : ``}


<ul class="svelte-1b1j5zx">${`${postData.slug != void 0 ? `<li class="svelte-1b1j5zx"><a href="${"/" + escape(postData.slug, true)}">${escape(prettySlug(postData.slug))}</a></li>` : `<li class="svelte-1b1j5zx">/${escape(postData.slug.replace("Thoughts/", ""))}</li>`}
        ${each(postData.children, (post) => {
    return `${post.children != void 0 ? `${validate_component(Posterize, "svelte:self").$$render($$result, { postData: post, page: page2 }, {}, {})}` : `${post.slug != void 0 ? `<ul class="svelte-1b1j5zx"><li class="svelte-1b1j5zx"><a${add_attribute("href", post.slug, 0)}>/${escape(post.slug)}</a></li></ul>` : `<ul class="svelte-1b1j5zx"><li class="svelte-1b1j5zx">/${escape(post.slug)}</li></ul>`}`}`;
  })}`}</ul>`;
});
const PostsContainer_svelte_svelte_type_style_lang = "";
const css = {
  code: ".hide.svelte-6x3ci2{display:none}.post-container.svelte-6x3ci2{border-top:solid green 2px;padding:1rem;width:auto}",
  map: null
};
const PostsContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { posts } = $$props;
  let { page: page2 } = $$props;
  let hideClass = "hide";
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  if ($$props.page === void 0 && $$bindings.page && page2 !== void 0)
    $$bindings.page(page2);
  $$result.css.add(css);
  return `<div class="post-container svelte-6x3ci2"><h3>Click Here For More!<span>↑</span><span>↓</span></h3>
    <div id="posts" class="${escape(hideClass, true) + " animate blur svelte-6x3ci2"}">${validate_component(Posterize, "Posterize").$$render($$result, { postData: posts, page: page2 }, {}, {})}</div></div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let currentPage = $page.url.pathname;
  let { data } = $$props;
  let { testData = data.posts } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.testData === void 0 && $$bindings.testData && testData !== void 0)
    $$bindings.testData(testData);
  $$unsubscribe_page();
  return `${slots.default ? slots.default({}) : ``}

${validate_component(PostsContainer, "PostsContainer").$$render($$result, { posts: testData, page: currentPage }, {}, {})}`;
});
export {
  Layout as default
};
