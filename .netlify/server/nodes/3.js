

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.9f07b923.js","_app/immutable/chunks/index.778a1c37.js"];
export const stylesheets = [];
export const fonts = [];
