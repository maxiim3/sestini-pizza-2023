/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 10s linear infinite reverse",
        "spin-faster": "spin 3 linear infinite reverse",
      },
      screens: {
        mobile: {
          raw: "(orientation : portrait) and (max-width: 819px), (min-aspect-ratio: 15/7)",
        },
      },
    },
    fontFamily: {
      main: ["Montserrat", "sans-serif"],
      describe: ["Roboto", "sans-serif"],
      accent: ["Cinzel", "serif"],
      decorative: ["Cinzel\\ Decorative", "cursive"],
    },
    colors: {
      beige: "rgba(249, 240, 220, 1)",
      "beige-light": "rgba(249, 240, 220, 0.5)",
      "light-grey": "rgba(158, 158, 158, 1)",
      "dark-grey": "rgba(48, 54, 54, 1)",
      "dark-gray-90": "rgba(48, 54, 54, 0.950)",
      "dark-gray-light": "rgba(32, 43, 49, 0.7)",
      orange: "rgba(255, 129, 51, 1)",
      blanc: "rgba(255, 255, 255, 1)",
      "special-prim": "rgba(29, 138, 203, 1)",
      "special-sec": "rgba(32, 43, 49, 1)",
      "special-prim-60": "rgba(32, 43, 49, 0.750)",
      "special-third": "rgba(0, 158, 208, 1)",
      gold: "rgba(224, 170, 62, 1)",
      "gold-90": "rgba(224, 170, 62, 0.95)",
      "gray-shadow-logo": "rgba(68, 68, 68, 1)",
    },
  },
  plugins: [],
}
