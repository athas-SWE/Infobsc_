/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3b82f6',
          light: '#60a5fa',
          dark: '#2563eb',
        },
        neutral: {
          light: '#f8fafc',
          DEFAULT: '#ffffff',
          dark: '#f1f5f9',
        },
      },
      container: {
        center: true,
        padding: '1rem',
      }
    },
  },
  plugins: [],
};