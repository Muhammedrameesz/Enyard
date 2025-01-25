/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        serif: ["Playfair Display", "serif"],
        poppins: ["Poppins", "sans-serif"],
        lora: ["Lora", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
        merriweather: ["Merriweather", "serif"],
        nunito: ["Nunito", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        alata: ["Alata", "sans-serif"],
        helvetica: ["Helvetica", "Arial", "Lucida", "sans-serif"],
        exo2: ['"Exo 2"', "sans-serif"],
        jost: ["Jost", "sans-serif"],
        apple: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
        avenir: ["Avenir", "Avenir Next", "sans-serif"],
        avenirSerif: ["Avenir Next LT Pro", "serif"],
        georgia: ["Georgia", "serif"],
        inter: ["Inter", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
        workSans: ["Work Sans", "sans-serif"],
      },
      
    },
  },
  plugins: [],
}

