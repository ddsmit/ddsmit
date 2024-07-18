import * as universal from '../entries/pages/Thoughts/_layout.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Thoughts/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/Thoughts/+layout.ts";
export const imports = ["_app/immutable/nodes/2.d3f171cd.js","_app/immutable/chunks/index.778a1c37.js","_app/immutable/chunks/stores.07139881.js","_app/immutable/chunks/singletons.db3a85eb.js"];
export const stylesheets = ["_app/immutable/assets/2.fc4f514d.css"];
export const fonts = [];
