/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'lexend-deca': ['"Lexend Deca"', 'sans-serif' ],
      'body': ['"Open Sans"', ],
     },
    extend: {
      backgroundImage: {
        'hero-img': "url('./src/assets/images/hero-img.png')",
        'small-hero-img': "url('./src/assets/images/s-hero-img.png')",
        'md-hero-img': "url('./src/assets/images/m-hero-img.png')",
        'arrow-right': "url('./src/assets/images/icons/arrow_forward_24px.png')",
       },
      dropShadow: {
        'lg': '0px 8px 16px rgba(35, 35, 64, 0.6)',
        'card-shadow': '0px 16px 24px rgba(118, 118, 178, 0.24)',
        'blog-shadow': '0px 18px 24px rgba(118, 118box, 178, 0.28)',
      },
      keyframes: {
        animImage: {
          from: { top: "-40%" },
          to: { top: "0", visibility: "visible", opacity: 1}
        },
        animMenu: {
          from: { display: "none" , opacity: 0 },
          to: { left: "0", display: "block", opacity: 1, }
        }
      },
      animation: {
        animImage: 'animImage 1s 1s forwards;',
        animMenu: 'animMenu 300ms forwards;',
      },
    },
    screens: {
      'mob-portrait': '0px',
      'mob-landscape': '320px',
      'tablet': '568px',
      'desktop': '744px',
      'lg-desktop': '950px',
    },
    textColor: {
      'offWhite': '#F5F5F5',
      'softBlue': '#5468E7',
      'softViolet': '#C897E4',
      'darkBlue': '#232340',
      'desaturatedBlue': '#7676B2',
      'lightOrange': '#FFBA79',
      'gray': 'rgba(35, 35, 64, 0.9)',
      'darkGray': 'rgba(37, 49, 60, 0.9)'
    },
    backgroundColor: theme => ({
      'white': '#FFFFFF',
      'darkBlue': '#232340',
      'offWhite': '#F5F5F5',
      'softBlue': '#5468E7',
      'lightOrange': '#FFBA79',
      'lightBlue': 'rgba(84, 104, 231, 0.5)',
      'lightGray': 'rgba(245, 245, 245, 0.24)',
      'whiteBlue': '#DAE3EA'
     }),
    borderColor: theme => ({
      'grayishBlue': '#D1ECFD',
      'lightOrange': '#FFBA79',
      'desaturatedBlue': '#7676B2',
     })
  },
  plugins: [],
}

