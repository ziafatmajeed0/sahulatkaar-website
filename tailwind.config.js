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
        primary: '#22c55e', // Brighter green for dark mode contrast
        primaryDark: '#16a34a',
        secondary: '#fb923c', // Brighter orange for dark mode contrast
        accent: '#3b82f6',
        background: '#09090b', // Deep zinc/black background
        dark: '#000000',
        contentBase: '#18181b', // Surface color for cards
      },

      // 🔥 ADD THIS (IMPORTANT)
      animation: {
        marquee: 'marquee 20s linear infinite',
        float: 'float 4s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
      },
    },
  },
  plugins: [],
};
