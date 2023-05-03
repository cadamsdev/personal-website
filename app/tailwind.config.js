/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				oleoscript: ['Oleo Script'],
				sourcesanspro: ['Source Sans Pro']
			},
			colors: {
				'deep-carrot-orange': '#f36633',
				'japanese-indigo': '#273948',
				'bright-gray': '#e9eef2'
			}
		}
	},
	plugins: []
};
