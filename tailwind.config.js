/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2d6a4f",
        "primary-light": "#b1f0ce",
        "primary-dark": "#0f5238",
        secondary: "#52b788",
        surface: "#f7faf7",
        "surface-low": "#d7fce4",
        "surface-high": "#ccf1d9",
        "surface-card": "#ffffff",
        "on-surface": "#002113",
        "on-surface-muted": "#404943",
        outline: "#707973",
        "outline-light": "#bfc9c1",
        danger: "#ba1a1a",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
}