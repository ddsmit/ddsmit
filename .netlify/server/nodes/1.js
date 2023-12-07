

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.46306c1b.js","_app/immutable/chunks/index.37e5ecad.js","_app/immutable/chunks/stores.6bdc8104.js","_app/immutable/chunks/singletons.a45f3708.js"];
export const stylesheets = [];
export const fonts = [];
