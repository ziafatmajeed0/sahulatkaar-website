/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#10b981', // Green (trust)
        secondary: '#f97316', // Orange (energy)
        accent: '#1e3a8a', // Dark Blue (professional)
      },
    },
  },
  plugins: [],
}
