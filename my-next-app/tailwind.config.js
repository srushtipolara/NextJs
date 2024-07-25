/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: '1024px',
      xl: '1280px',
      "2xl": '1536px'
    },
    colors: {
      transparent: 'transparent',
      blue: '#1fb6ff',
      purple: '#7e5bef',
      yellow: colors.yellow,
      // vs
      green:{
        50:"#f7fee7",
        100:"#ecfccb",
        200:"#bbf7d0",
        700:"#15803d"
      }
    },
    extend: {
      borderRadius: {
        "4xl":"2rem"
      }
    },
  },
  plugins: [],
}

