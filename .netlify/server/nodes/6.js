

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Thoughts/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.c6cc74f9.js","_app/immutable/chunks/index.37e5ecad.js","_app/immutable/chunks/stores.6bdc8104.js","_app/immutable/chunks/singletons.a45f3708.js"];
export const stylesheets = [];
export const fonts = [];
