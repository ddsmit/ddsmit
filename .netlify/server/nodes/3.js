

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.ea7cefef.js","_app/immutable/chunks/index.37e5ecad.js"];
export const stylesheets = [];
export const fonts = [];
