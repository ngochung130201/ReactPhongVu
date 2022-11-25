/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundColor : {
        'main-color':'rgb(20, 53, 195)'
      },
      textColor :{
        'textColorMain':'rgb(130, 134, 158)',
        'hoverColor':'rgb(20, 53, 195)',
        'textColor':'#333333',
        'textPrice':'rgb(20, 53, 195)',
      }
    },
  },
  plugins: [],
}
