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
        }
      },
      animation: {
        slideUpEnter: "slideUpEnter .3s ease-in-out"
      }
    },
  },
  plugins: [],
}
