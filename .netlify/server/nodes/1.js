

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.4e7a4c0e.js","_app/immutable/chunks/index.778a1c37.js","_app/immutable/chunks/stores.07139881.js","_app/immutable/chunks/singletons.db3a85eb.js"];
export const stylesheets = [];
export const fonts = [];
