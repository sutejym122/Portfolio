/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0A0E14",
        secondary: "#8891A3",
        tertiary: "#12161F",
        "black-100": "#171C27",
        "black-200": "#0D1017",
        "white-100": "#E9EDF4",
        line: "#232A38",
        signal: "#FFB454",
        ok: "#3DD68C",
        down: "#FB6467",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      boxShadow: {
        card: "0px 20px 60px -15px rgba(0,0,0,0.55)",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
