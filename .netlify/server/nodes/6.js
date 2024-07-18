import * as universal from '../entries/pages/History/_slug_/_page.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/History/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/History/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/6.51a9f49d.js","_app/immutable/chunks/index.8f2ca6db.js","_app/immutable/chunks/control.c2cf8273.js","_app/immutable/chunks/index.778a1c37.js"];
export const stylesheets = [];
export const fonts = [];
