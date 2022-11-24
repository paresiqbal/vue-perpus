/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF2E63",
        secondary: "#252A34",
        white: "#FFF",
      },
    },
    fontFamily: {
      Poppins: ["Fira Sans, sans-serif"],
    },
    container: {
      padding: "2rem",
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
    },
  },
  plugins: [],
};
