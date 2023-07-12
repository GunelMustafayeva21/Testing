/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'Picture': "url('/src/img/purple.png')"
        
      }
    },
  },
  plugins: [],
}

