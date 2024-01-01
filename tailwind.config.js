/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'custom-yellow': 'hsl(47, 88%, 63%)',
        'custom-grey': 'hsl(0, 0%, 50%)',
      },
    },
  },
  plugins: [],
}