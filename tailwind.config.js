/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Satoshi Variable"', 'sans-serif'],
      },
      colors: {
        background: "#0A0914",
        'gray-12': '#FAFAFF',
      },
    },
  },
  plugins: [],
}
