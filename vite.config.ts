import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite'

export default defineConfig(({ command }) => {
  return {
    plugins: [
		sveltekit(),
    ],
  }
})
