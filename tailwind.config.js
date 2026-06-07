/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Esto te permite usar 'font-carelia' en tu HTML
        carelia: ['Carelia', 'serif'],
      },
    },
  },
  plugins: [],
}


