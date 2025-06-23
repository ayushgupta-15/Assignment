/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Satoshi Variable"', 'sans-serif'],
      },
      colors: {
        background: '#0A0914',
        accent: '#6852D6',        //  ← NEW
        'gray-12': '#FAFAFF',
      },
    },
  },
  plugins: [],
};
