/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        "color-black": "#222140",
        "color-yellow": "#EFF29B",
        "color-lila": "#B091F2",
        "color-fucsia": "#CA6BF2",
        "color-pink": "#F2798F",
        "color-white": "#FFFFFF",
        "color-blue": "#95B2E9",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
