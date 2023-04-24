/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}", //esto también es una forma de englobar subdirectorios
  ],
  theme: {
    extend: {
      colors: {
        'pink1': '#F9A8D4',
        'pink2': '#F472B6',
      },
      fontFamily: {
        'sans': ['Roboto'],
        'poppins': ['Poppins'],
      },
      screens:{
        'xsm': {'min': '319px', 'max': '639px'},
        
      }
    },
  },
  variants: {},
  plugins: [],
};
