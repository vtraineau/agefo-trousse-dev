/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      width: {
        'chemin': '325px',
        'chemin-md': '700px',
        'chemin-lg': '1000px', // 221px
        'chemin-footer': '1150px',
      },
      colors: {
        'purple': '#E9EEFD',
        'btn-green': '#D7DF22',
        'beigeish': '#FDF8F4',
        'dark-grey': '#404141',
        'on-dark-grey': '#FDF9F9',
        'blueish': '#EEF2FF'
      },
      fontFamily: {
        'sans': ['"Instrument Sans"'],
        'tiro': ['"Tiro Bangla"'],
      },
      fontSize: {
        'sm': '.975rem',
        'base': '1.1rem',
        'btn': '1.025rem',
        'lg': '1.25rem',
        'xl': '1.5rem',
        '2xl': '1.75rem',
      }
    },
  },
  plugins: [],
}