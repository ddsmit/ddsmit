

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Thoughts/TIL/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/12.c7289e33.js","_app/immutable/chunks/index.37e5ecad.js"];
export const stylesheets = [];
export const fonts = [];
