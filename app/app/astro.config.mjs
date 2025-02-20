import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

import { i18n } from '/src/config'

// https://astro.build/config
export default defineConfig({
	site: 'https://files.2gether-asso.fr',
	i18n: i18n,
	vite: {
		plugins: [
			tailwindcss(),
		],
	},
})
