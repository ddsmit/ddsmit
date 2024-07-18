

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Thoughts/TIL/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/11.d2b4bfed.js","_app/immutable/chunks/index.778a1c37.js"];
export const stylesheets = [];
export const fonts = [];
