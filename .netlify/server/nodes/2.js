import * as universal from '../entries/pages/Thoughts/_layout.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Thoughts/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/Thoughts/+layout.ts";
export const imports = ["_app/immutable/nodes/2.532e38d9.js","_app/immutable/chunks/index.37e5ecad.js","_app/immutable/chunks/stores.6bdc8104.js","_app/immutable/chunks/singletons.a45f3708.js"];
export const stylesheets = ["_app/immutable/assets/2.de8a564b.css"];
export const fonts = [];
