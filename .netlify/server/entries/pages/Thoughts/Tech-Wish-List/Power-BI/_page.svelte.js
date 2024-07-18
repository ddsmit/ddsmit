import { c as create_ssr_component } from "../../../../../chunks/index2.js";
import "prismjs";
/* empty css                                                           */const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h3>Ability to Leverage API to Get Authorization Data Based on User</h3>
<p>We leverage row level security quite a bit in our applications, and it would be great if you could provide an endpoint that 
    would provide the appropriate filtering data. If you could use the users log in to authenticate to the endpoint using SSO, 
    it would allow us to dynamically provide the authorization data on request instead of precalculatin the table and loading the data.
    Another option could be allowing for session based refresh on a direct query data source with pass through credentials (using direct query 
    tends to send way more queries that would be needed for this use case).
</p>`;
});
export {
  Page as default
};
