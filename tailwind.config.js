/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        destructive: "#ED145B;",
        primary: "#F7941E",
        secondary: "#1CBBB4",
        bdColor: "rgb(203 213 225",
        bgOrange: "#F7941E",
        bgGreen: "#73BE48",
        warm: "#FFF0E5",
        hoverText: "rgb(28, 187, 180)",
        textGray: "#686868",
      },
    },
  },
  plugins: [],
};
