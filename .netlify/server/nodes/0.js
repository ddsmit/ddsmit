

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.88e3a435.js","_app/immutable/chunks/index.37e5ecad.js"];
export const stylesheets = ["_app/immutable/assets/0.0fa5a051.css"];
export const fonts = [];
