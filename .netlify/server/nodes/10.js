

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Thoughts/My-RSI/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.61cd8f7d.js","_app/immutable/chunks/index.778a1c37.js"];
export const stylesheets = [];
export const fonts = [];
