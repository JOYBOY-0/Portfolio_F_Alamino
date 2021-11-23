module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        'boxed': '0 5px 0 rgb(0 0 0 / 30%), inset 0 -5px 0 rgb(0 0 0 / 20%), inset 0 5px 0 rgba(255, 255, 255, 0.2)',
      },
      spacing: {
        '1vh': '1vh',
        '2vh': '2vh',
        '3vh': '3vh',
        '4vh': '4vh',
        '5vh': '5vh',
        '6vh': '6vh',
        '7vh': '7vh',
        '8vh': '8vh',
        '9vh': '9vh',
        '10vh': '10vh',
        '15vh': '15vh',
        '20vh': '20vh',
        '30vh': '30vh',
        '40vh': '40vh',
        '50vh': '50vh',
        '60vh': '60vh',
        '70vh': '70vh',
        '80vh': '80vh',
        '85vh': '85vh',
        '90vh': '90vh',
        '160vh': '160vh',
        '180vh': '180vh',
        '1/10': '10%',
        '4/5': '80%',
        '9/10': '90%',
        '11/10': '110%'


      },
    },
    screens: {
      '2xs': '325px',
      'xs': '425px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      } 
  },
  variants: {
    extend: {
      filter: ['hover', 'focus'],
      scale: ['hover', 'focus', 'active'],
    },
  },
  plugins: [],
}
