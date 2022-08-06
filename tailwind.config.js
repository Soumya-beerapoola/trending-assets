/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "btn-black" :"#14172B",
        "btn-white" :"#ECF0FF",
        "btn-green" :"#00FFA3" 
      },
      fontWeight:{
        "fweight" :"600"
      },
      backgroundImage:{
        "box-bg" : "url('./Images/Vector.png')"
      }
    },
    },

  plugins: [],
}
