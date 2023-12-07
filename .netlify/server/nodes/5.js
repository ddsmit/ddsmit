

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/History/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.a0b335f9.js","_app/immutable/chunks/index.37e5ecad.js"];
export const stylesheets = ["_app/immutable/assets/5.1948f0b4.css"];
export const fonts = [];
