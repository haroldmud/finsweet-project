/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./page/**/*.{html, js}", "./components/**/*.{html, js}"],
  theme: {
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "50%": "50%",
      "16": "4rem",
    },
    extend: {},
  },
  plugins: [],
};
