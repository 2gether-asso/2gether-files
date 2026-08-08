import type { AstroConfig } from 'astro'

type LocaleKeys = Record<string, Record<string, string>>
type I18nConfig = AstroConfig['i18n'] & { localeKeys?: LocaleKeys }

export const i18n: I18nConfig = {
	locales: [
		{
			codes: ['fr', 'fr_FR'],
			path: 'fr',
		}
	],
	defaultLocale: 'fr',
	fallback: {},
	routing: {
		prefixDefaultLocale: false,
		redirectToDefaultLocale: true,
		fallbackType: 'rewrite',
	},
}
