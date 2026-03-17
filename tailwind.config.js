/** @type {import('tailwindcss').Config} */
export default {
  // 🔥 This is required for your ThemeToggle component to work
  darkMode: "class", 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Your custom brand colors
      colors: {
        primary: "#6366f1",   // Indigo
        secondary: "#0ea5e9", // Sky Blue
      },
    },
  },
  plugins: [],
}