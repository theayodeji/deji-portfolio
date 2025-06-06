/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F1FF',
          100: '#CCE5FF',
          200: '#99D1FF',
          300: '#66B2FF',
          400: '#3399FF',
          500: '#0080FF',
          600: '#0066CC',
          700: '#004D99',
          800: '#003366',
          900: '#001A33',
        },
        secondary: {
          50: '#F8F9FA',
          100: '#E9ECEF',
          200: '#DEE2E6',
          300: '#CED4DA',
          400: '#ADB5BD',
          500: '#6C757D',
          600: '#495057',
          700: '#212529',
          800: '#121212',
          900: '#000000',
        },
      },
    },
  },
  plugins: [],
}
