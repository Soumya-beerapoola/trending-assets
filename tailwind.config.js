/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "btn-black": "#14172B",
        "btn-white": "#ECF0FF",
        "green"    : "#00FFA3",
        "red"      : "#FF4D4D",
        "txt-ash"  : "#737BAE",
        "page-bg":"#14172B"   
      },
      fontWeight: {
        "fweight": "600"
      },
      backgroundImage: {
        "box-bg": "url('./assets/images/Vector.png')"
      },
      borderRadius: {
        "large": "17px"
      }
    },
  },

  plugins: [],
}
