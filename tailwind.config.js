/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
      '[auto,auto,1fr]': 'auto auto 1fr',
    },},
    fontFamily:{
      principal: ['Montserrat', 'sans-serif'],
      enfatica: ['Montserrat' , 'bold']
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require("daisyui")
    
  ],
}
