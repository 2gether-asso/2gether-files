import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
	site: 'https://files.2gether-asso.fr',
	vite: {
		plugins: [
			tailwindcss(),
		],
	},
})
