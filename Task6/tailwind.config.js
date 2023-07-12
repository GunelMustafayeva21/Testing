/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./public/**/*.{html,js}"],
  theme: {
    
      fontSize: {
        xs: ['6px', '6px'],
        xl:['25px', '30px'],
        lg:['20px', '25px'],
        base:['13px', '18px'],
        sm:['9px', '9px'],
        '2xl':['50px','50px']
      },
    container:{
      center:true,
      
    },
    extend: {
      fontFamily:{
        gemunu:['Gemunu Libre', 'sans-serif'],
        open:  ['Open Sans', 'sans-serif'],
      },
      colors:{
        'gega-red':'#BC1A45',
        'gega-melon':'#FFD369',
        'gega-grey':'#DDDDDD',
        'gega-white':'#F7F7F7',
      }
    },
  },
  plugins: [],
}
