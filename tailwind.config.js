/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html, js}"],
  theme: {
    extend: {},
    fontFamily: {
      'display': ['DM Serif Text', 'serif']
    }
  },
  plugins: [require("daisyui")],
}

