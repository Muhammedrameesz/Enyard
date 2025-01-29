import daisyui from "daisyui";
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
        lanze: ['Lanze', 'sans-serif'],
        halogrotesk: ['Halo Grotesk', 'sans-serif'],
        jakarta: ["'Plus Jakarta Sans'", "sans-serif"],
      },
      boxShadow: {
        custom: '0px 7px 29px 0px rgba(100, 100, 111, 0.2)',
        normal: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
        decent:'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset'
      },
      
    },
  },
  plugins: [daisyui],
}

