

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.13ed4362.js","_app/immutable/chunks/index.778a1c37.js","_app/immutable/chunks/singletons.db3a85eb.js"];
export const stylesheets = ["_app/immutable/assets/0.4cdb7a1c.css"];
export const fonts = [];
