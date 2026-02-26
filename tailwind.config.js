/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Aztec Gods inspired palette (high contrast, earthy tones)
        primary: "#1a1a1a", // Deep background
        secondary: "#f4e4bc", // Parchment/Codex text color
        accent: "#d95d39", // Ritual Red
        "accent-blue": "#40798c", // Lapis Lazuli
        "accent-green": "#70a9a1", // Turquoise
        "paper": "#f4e4bc",
      },
      fontFamily: {
        // Serif for headings (Codex feel), Sans for body
        serif: ['"Playfair Display"', '"Noto Serif SC"', 'serif'],
        sans: ['"Lato"', '"Noto Sans SC"', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}
