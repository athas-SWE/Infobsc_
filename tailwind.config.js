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
          DEFAULT: '#0066cc',
          light: '#3385ff',
          dark: '#004c99',
        },
        neutral: {
          light: '#f5f7fa',
          DEFAULT: '#ffffff',
          dark: '#f0f2f5',
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