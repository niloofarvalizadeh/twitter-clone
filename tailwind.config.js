/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      width: {
      '255': '255px',
    },
      fontFamily: {
     sans: ['"SF Compact Display"', 'sans-serif'],
     
      },
      colors: {
        Black: '#0F1419',
        Dark1: '#17202A',
        Dark2: '#1C2733',
        Dark3: '#1C2733',
        Dark4: '3A444C',
        Dark5: '#5B7083',
        Dark6: '#8899A6',
        Dark7: '#EBEEF0',
        Dark8: '#F7F9FA',
        'Primary-Blue': '#1DA1F2',
        
      }
    },
  },
  plugins: [],
}

