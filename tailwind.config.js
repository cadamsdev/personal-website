/* eslint-disable global-require */
module.exports = {
  purge: [
    './src/**/*.jsx',
    './src/**/*.js',
    './src/**/*.ts',
    './src/**/*.tsx',
  ],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
