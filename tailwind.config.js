/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#1d2130",
      },
      backgroundSize: {
        "50%": "50%",
        "16": "4rem",
      },
    },
  },
  plugins: [],
};
