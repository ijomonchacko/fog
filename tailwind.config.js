/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0054a6',
        secondary: '#f2f6fc',
        white: '#ffffff',
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 