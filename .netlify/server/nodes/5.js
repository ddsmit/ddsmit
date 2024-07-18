import * as universal from '../entries/pages/History/_page.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/History/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/History/+page.ts";
export const imports = ["_app/immutable/nodes/5.b5dabc25.js","_app/immutable/chunks/sanity.81f7ec02.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.8f2ca6db.js","_app/immutable/chunks/control.c2cf8273.js","_app/immutable/chunks/index.778a1c37.js"];
export const stylesheets = ["_app/immutable/assets/5.340ee350.css"];
export const fonts = [];
