/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,tsx,jsx}", "./src/**/*.{js,ts,tsx,jsx}"],
  theme: {
    extend: {
      screens: {
        xs: { min: "0px", max: "639px" },
        sm: { min: "640px", max: "767px" },
        // => @media (min-width: 640px and max-width: 767px) { ... }

        md: { min: "768px", max: "1023px" },
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        lg: { min: "1024px", max: "1279px" },
        // => @media (min-width: 1024px and max-width: 1279px) { ... }

        xl: { min: "1280px", max: "1535px" },
        // => @media (min-width: 1280px and max-width: 1535px) { ... }

        "2xl": { min: "1536px" },
        // => @media (min-width: 1536px) { ... }
      },
      keyframes: {
        slideUpEnter: {
          "0%": {
            opacity: 0,
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0px)",
          },
        },
        steam: {
          "0%": {
            "background-position": "0 0",
          },
          "50%": {
            "background-position": "400% 0",
          },
          "100%": {
            "background-position": "0 0",
          },
        },
      },
      animation: {
        slideUpEnter: "slideUpEnter .3s ease-in-out",
        steam: "steam .3s ease-in-out",
      },
    },
  },
  plugins: [],
};
