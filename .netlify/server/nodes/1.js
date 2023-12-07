

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.59adf151.js","_app/immutable/chunks/index.37e5ecad.js","_app/immutable/chunks/stores.d010e92e.js","_app/immutable/chunks/singletons.dafeae3a.js"];
export const stylesheets = [];
export const fonts = [];
