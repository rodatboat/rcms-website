/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./renderer/**/*.{vue,js,ts,jsx,tsx}",
  "./pages/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    colors: {
      primary: {
        DEFAULT: "#FFE01B",
      },
      secondary: {
        DEFAULT: "#1216F2",
      },
      white: {
        DEFAULT: "#fff",
      },
      black: {
        DEFAULT: "#000",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Coco-Sharp-Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
}

// primary: {
//   DEFAULT: "#FFE01B",
// },
// secondary: {
//   DEFAULT: "#1216F2",
// },