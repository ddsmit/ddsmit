

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Future/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.5443717e.js","_app/immutable/chunks/index.778a1c37.js"];
export const stylesheets = [];
export const fonts = [];
