/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#080c14",
        cardBg: "#0f172a",
        accentCyan: "#06b6d4",
        accentEmerald: "#10b981",
      },
    },
  },
  plugins: [],
}
