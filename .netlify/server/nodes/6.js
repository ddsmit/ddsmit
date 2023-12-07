

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Thoughts/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.24e6e068.js","_app/immutable/chunks/index.37e5ecad.js","_app/immutable/chunks/stores.d010e92e.js","_app/immutable/chunks/singletons.dafeae3a.js"];
export const stylesheets = [];
export const fonts = [];
