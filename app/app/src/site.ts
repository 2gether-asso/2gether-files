export interface Site
{
	title?: string
	description?: string
	author?: string
	keywords?: string[]
	themeColor?: string
	favicon?: string
	lang?: string
}

export const site: Site = {
	title: 'Fichiers 2GETHER',
	author: 'Matiboux',
	themeColor: '#ffffff',
	favicon: '/favicon.png',
	lang: 'fr',
}
