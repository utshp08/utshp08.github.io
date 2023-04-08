/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,tsx,jsx}", 
    "./src/**/*.{js,ts,tsx,jsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        slideUpEnter: {
          "0%": {
            opacity: 0,
            transform: "translateY(20px)"
          },
          "100%": {
            opacity: 1,
            transform:"translateY(0px)"
          }
        },
        steam: {
          "0%": {
            "background-position": "0 0"
          },
          "50%":{
            "background-position": "400% 0"
          },
          "100%" :{
            "background-position": "0 0"
          }
        },
      },
      animation: {
        slideUpEnter: "slideUpEnter .3s ease-in-out",
        steam: "steam .3s ease-in-out"
      }
    },
  },
  plugins: [],
}
