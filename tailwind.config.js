/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,njk,md}",
    "./src/_includes/**/*.njk",
    "./src/_data/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        swiss: {
          black: '#000000',
          white: '#FFFFFF',
          red: '#E53E3E',
          gray: {
            100: '#F5F5F5',
            200: '#E5E5E5',
            300: '#D4D4D4',
            400: '#A3A3A3',
            500: '#737373',
            600: '#525252',
            700: '#404040',
            800: '#262626',
            900: '#171717',
          },
        },
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
      spacing: {
        'xs': '0.25rem',
        'sm': '0.5rem',
        'md': '0.75rem',
        'lg': '1rem',
        'xl': '1.5rem',
        '2xl': '2rem',
        '3xl': '3rem',
        '4xl': '4rem',
        '5xl': '5rem',
      },
      maxWidth: {
        'swiss': '1440px',
      },
    },
  },
  plugins: [],
}
