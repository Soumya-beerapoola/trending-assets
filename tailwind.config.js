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
        "page-bg":"#14172B",
        "b-color" :"#2e3247",
        "card-color":"#1c2035"
      },
      fontWeight: {
        "fweight": "600"
      },
      borderRadius: {
        "large": "17px"
      },
      fontSize:{
        "medium" :"12px"
      },
      spacing: {
        '100': '100px',
        '123':"123px"
      }
    },
  },

  plugins: [],
}
