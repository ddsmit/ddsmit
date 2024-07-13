

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.48ff12e7.js","_app/immutable/chunks/index.37e5ecad.js","_app/immutable/chunks/stores.0c7c7ae5.js","_app/immutable/chunks/singletons.4529dbb2.js"];
export const stylesheets = [];
export const fonts = [];
