module.exports = {
  purge: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    container: {
      center: true
    },
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'isles-gray': '#7A93A3',
      'isles-blue': '#476B83',
      'isles-green': '#84A386',
      'khaki': '#B7BA77',
      'cultured': '#EFEFEF',
      'cultured2': '#F9F9F9',
      'golf-light-green': '#BFF0D4',
      'golf-green': '#419814',
      'golf-red': '#A01F24',
      'golf-blue': '#00308c'



    },
    fontFamily: {
      sans: ['Oxygen', 'sans-serif'],
      
      'eagle-lake': ['Eagle Lake', 'cursive']
      
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require( 'daisyui' ),
  ],
 };