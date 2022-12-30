/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        oleoscript: ['Oleo Script'],
        sourcesanspro: ['Source Sans Pro'],
      },
      colors: {
        'deep-carrot-orange': '#f36633',
        'japanese-indigo': '#273948',
        'bright-gray': '#e9eef2',
      },
    },
    fontFamily: {
      sans: ['Source Sans Pro'],
    },
  },
  plugins: [],
};
