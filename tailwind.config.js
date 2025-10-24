/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'light-bg': '#ffffff',
        'light-text': '#1a1a1a',
        'dark-bg': '#0a0118',
        'dark-secondary': '#1a0b2e',
        'purple-dark': '#2d1b4e',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
