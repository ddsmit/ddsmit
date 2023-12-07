

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Thoughts/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.8f42f9e1.js","_app/immutable/chunks/index.37e5ecad.js","_app/immutable/chunks/stores.0c7c7ae5.js","_app/immutable/chunks/singletons.4529dbb2.js"];
export const stylesheets = [];
export const fonts = [];
