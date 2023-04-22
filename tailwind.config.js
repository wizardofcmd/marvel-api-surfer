/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [
    require('tailwindcss/plugin')(function ({addBase}) {
      addBase({
        '[type="search"]::-webkit-search-decoration': {display: 'none'},
        '[type="search"]::-webkit-search-cancel-button': {display: 'none'},
        '[type="search"]::-webkit-search-results-button': {display: 'none'},
        '[type="search"]::-webkit-search-results-decoration': {display: 'none'},
      })
    }),
  ],
};
