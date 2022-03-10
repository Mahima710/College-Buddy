module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'nunito': ['Nunito',' sans-serif'],
      'openSans': ['Open Sans',"sans-serif"]
    },
    boxShadow: {
      'cardShadow' :'-1px 1px 22px -11px black',
      'listShadow' : ' 1px 1px 3px -1px black'
    },
    spacing: {
      'cardpic' : "25vw"
     },
     backgroundColor: {
       'purple' : '#535783'
     },
     

  },
  variants: {
    extend: {
      
     
      
    },
  },
  plugins: [],
}
