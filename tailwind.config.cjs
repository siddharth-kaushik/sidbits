/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['apercu', ...defaultTheme.fontFamily.sans],
      serif: ['p22-mackinac-pro', ...defaultTheme.fontFamily.serif],
      mono: ['apercu-mono', ...defaultTheme.fontFamily.mono],
      display: ['fino', defaultTheme.fontFamily.display],
    },
    extend: {},
  },
  plugins: [],
}
