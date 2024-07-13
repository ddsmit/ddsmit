

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Thoughts/LearningPath/AI/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.55e6aebd.js","_app/immutable/chunks/index.37e5ecad.js"];
export const stylesheets = [];
export const fonts = [];
