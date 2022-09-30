/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkBrown:"#27241D",
        lightBrown:" #423D33",
        sand:" #CCC9A1",
        brown:"#857F72"
      }
    },
  },
  plugins: [],
}