import { c as create_ssr_component, e as escape, f as each, v as validate_component } from "../../../../chunks/index2.js";
const SkillListing = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { accomplishment } = $$props;
  if ($$props.accomplishment === void 0 && $$bindings.accomplishment && accomplishment !== void 0)
    $$bindings.accomplishment(accomplishment);
  return `<i>${escape(accomplishment.role.company)} - ${escape(accomplishment.role.title)}</i>
<h4>${escape(accomplishment.accomplishment.title)}</h4>
<p>${escape(accomplishment.accomplishment.description)}</p>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1>${escape(data.skill)}</h1>
${each(data.accomplishments, (accomplishment) => {
    return `${validate_component(SkillListing, "SkillListing").$$render($$result, { accomplishment }, {}, {})}`;
  })}`;
});
export {
  Page as default
};
