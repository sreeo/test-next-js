const getColors = require('./tailwindcss/colors.js')
const getFontSize = require('./tailwindcss/font-size.js')
const getBoxShadow = require('./tailwindcss/box-shadow.js')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    colors: getColors(),
    fontSize: getFontSize(),
    boxShadow: getBoxShadow()
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      textColor: ['active'],
      borderColor: ['active']
    }
  },
  plugins: []
}
