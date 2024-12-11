/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    //FUENTE DE TIPOGRAFIA
    fontFamily:{
      istokWeb: ['Istok Web','san-serif'],
      nunito:['Nunito','san serif']
    },
    extend: {
      colors:{
        primary:{
          default:"#519674",
          _900:"#63A182",
          _800:"#74AB90",
          _700:"#86B69E",
          _600:"#97C0AC",
          _500:"#A7CAB9",
          _400:"#B9D5C7",
          _300:"#CBE0D6",
          _200:"#DCEAE3",
        },
        second:{
          default:"#8DAC99",
          _900:"#99B5A4",
          _800:"#A4BDAD",
          _700:"#B0C5B8",
          _600:"#BBCDC2"
        },
        third:{
          default:"#CDCDC3",
          _900:"#D2D2C9",
          _800:"#D7D7CF",
          _700:"#DCDCD5",
          _600:"#E1E1DB"
        },
        fourd:{
          default:"#EDE7E0",
          _600:"#F4F1EC"
        },
      }
    },
  },
  plugins: [],
};
