/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0b1a33",
        secondary: "#ff6c36",
      },
      fontFamily: {
        sans: ['"GT America"', '"Noto Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
