

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Thoughts/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.cdb5b7ba.js","_app/immutable/chunks/index.778a1c37.js","_app/immutable/chunks/stores.07139881.js","_app/immutable/chunks/singletons.db3a85eb.js"];
export const stylesheets = [];
export const fonts = [];
