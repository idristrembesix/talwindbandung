/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        f1:"#31A0FE",
        f2:"#23856D",
        f3:"#EC5C2E",
        f4:"#E1F4FF",
        f5:"#EC5C2E",
        df1:"#252B42",
        df2:"#394264",
        bgc1:"#21739c",
        bgc2:"#0c4582",
        bgc3:"#0e78c9",
        C1:"#6B6BDD",


      },
      backgroundImage:{
        bgl:"url('../img/cp-bg.png')",
        bg2:"url('../img/cp-bg-2.png')",
        bdg1:"url('../img/bg-dark-header.png')",
        bdg2:"url('../img/bg-dark-content.png')",
      }

    },
  },
  plugins: [],
  darkMode:'class'
}

