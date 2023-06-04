/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    screens: {
      'xsm': '412px',
      // => @media (min-width: 412px) { ... }
    },
    extend: {
      colors: {
        pistachio: {
          DEFAULT: '#8EB006',
          50: '#EEFDB6',
          100: '#E9FCA0',
          200: '#DFFA73',
          300: '#D5F947',
          400: '#CBF71B',
          500: '#B2DC08',
          600: '#8EB006',
          700: '#6A8404',
          800: '#465703',
          900: '#232B01',
          950: '#111501',
        },
      },
    },
  },
  plugins: [],
};
