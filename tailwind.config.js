
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        brown: {
          700: "#8B4513",
          800: "#5C3317",
        },
        tan: "#D2B48C",
        mediumBrown: "#A0522D",
        darkBrown: "#5C4033",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
