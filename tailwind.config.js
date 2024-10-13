/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
     sans: ['"SF Compact Display"', 'sans-serif'],
      },
      colors: {
        Dark5: '#5B7083',
        Dark7: '#EBEEF0',
      }
    },
  },
  plugins: [],
}

