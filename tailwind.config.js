/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    fontFamily: {
      Outfit: ['Outfit'],
    },
    extend: {
      colors: {
        'greenos':'#92CE08',
        'grayos':'#C2C2C2'
      },
    },
  },
  plugins: [],
};
