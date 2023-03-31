import { defaultTheme, defineUserConfig } from 'vuepress'
import { sidebar } from './router'
const { searchPlugin } = require('@vuepress/plugin-search')

export default defineUserConfig({
	base: "/codigo-digital/",
	lang: 'es-ES',
	title: 'Código Digital',
	description: 'Documentación de diferentes código legal del perú',
	open: false,
	head: [
		['link', { rel: 'icon', href: '/codigo-digital/images/favicon.png' }],
		['link', { rel: "stylesheet", href: '/codigo-digital/styles/index.css' }]
	],
	theme: defaultTheme({
		sidebar: sidebar,
		colorMode: 'light'
	}),
	dest: "docs",
	plugins: [
		searchPlugin({
			'/': {
				placeholder: 'Buscar',
				isSearchable: (page) => page.path !== '/guide',
			}
		}),
	]
})