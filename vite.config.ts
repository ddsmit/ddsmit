import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite'

export default defineConfig(({ command }) => {
  return {
    // ...
    plugins: [
		sveltekit(),
		// {
		// 	name: 'build-script',
		// 	buildStart(options) {
		// 	if (command === 'build') {
		// 		// console.log(Object.keys(import.meta.glob(['./**/*.svelte','!./+page.svelte','!./**/+layout.svelte'])))
		// 	}
		// 	},
		// },
    ],
  }
})

// const config: UserConfig = {
// 	plugins: [sveltekit()]
// };

// export default config;
