import * as universal from '../entries/pages/Thoughts/_layout.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Thoughts/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/Thoughts/+layout.ts";
export const imports = ["_app/immutable/nodes/2.187b8645.js","_app/immutable/chunks/index.37e5ecad.js","_app/immutable/chunks/stores.0c7c7ae5.js","_app/immutable/chunks/singletons.4529dbb2.js"];
export const stylesheets = ["_app/immutable/assets/2.de8a564b.css"];
export const fonts = [];
