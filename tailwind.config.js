/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: "# ",
      },
      backgroundSize: {
        "50%": "50%",
        "16": "4rem",
      },
    },
  },
  plugins: [],
};
