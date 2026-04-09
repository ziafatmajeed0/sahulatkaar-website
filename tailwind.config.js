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
        primary: '#16a34a',      // main green
        primaryDark: '#15803d',  // hover green
        secondary: '#f97316',    // orange CTA
        accent: '#1e3a8a',       // dark blue
        background: '#ffffff',   // white
        dark: '#0f172a',         // dark text/bg
      },
    },
  },
  plugins: [],
};