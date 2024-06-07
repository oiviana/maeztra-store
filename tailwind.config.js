/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-yellow':'#FAA500',
        'primary-white':'#FFFFFF',
        'secondary-white':'#FAFAFA',
        'tertiary-white':'#EFEFEF',
        'primary-gray':'#353535',
        'primary-black':'#000000',

      },
    },
    fontFamily: {
      titillium: ["Titillium Web", "sans-serif"],
      montserrat: ["Montserrat", "Titillium Web"],
    }
  },
  plugins: [],
}