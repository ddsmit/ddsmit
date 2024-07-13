

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Future/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.043c2418.js","_app/immutable/chunks/index.37e5ecad.js"];
export const stylesheets = [];
export const fonts = [];
