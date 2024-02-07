/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/components/**/**/**/**/*.jsx',
    './src/components/**/**/**/*.jsx',
    './src/components/**/**/*.jsx',
    './src/components/**/*.jsx',
    './src/common/**/**/*.jsx',
    './src/common/Slaves/*.jsx',
    './src/pages/*.jsx',
  ],
  theme: {
    extend: {
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        t: '0 -1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        orange: '0px 20px 20px -15px rgba(245, 56, 56, 0.81)',
        'orange-md': '0px 20px 40px -15px rgba(245, 56, 56, 0.81)',
        none: 'none',
      },
      colors: {
        transparent: 'transparent',
        black: {
          100: '#000',
          500: '#4F5665',
          600: '#0B132A',
        },
        red: {
          100: '#ff2800',
          500: '#ff0038'
        },
        purple:{
100:"#9400d3 ",
500:"#8f00ff "
        },
        CTA: {
          500: '#d62828',
          800: '#fefefe',
          600: '#000000',
          900: '#fff',
        },
        orange: {
          100: '#FFECEC',
          500: '#F53855',
        },
        green: {
          '50': '#f0fdf4',
          '100': '#dcfce7ee',
          '200': '#a7f3d0',
          '300': '#6ee7b7',
          '400': '#3dd4a8',
          '500': '#2bbd7e',
          '600': '#249862',
          '700': '#187749',
          '800': '#0e513a',
          '900': '#0c4228',
          '910':'#39ff14',
          '920':'#006400'
        },
        white: {
          '50': '#ffffff',
          '100': '#fefefe',
          '200': '#fdfdfd',
          '300': '#fbfbfb',
          '400': '#f9f9f9',
          '500': '#f7f7f7',
          '600': '#f5f5f5',
          '700': '#f3f3f3',
          '800': '#f1f1f1',
          '900': '#efefef',
        },
        gray: {
          100: '#EEEFF2',
          400: '#4F5665aa',
          500: '#DDDDDD',
        },
        indigo: {
          500: '#000',
        },
        teal: {
          '50': '#e6fffa',
          '100': '#b2f5ea',
          '200': '#81e6d9',
          '200t': '#AFB5C0aa',
          '300': '#4fd1c5',
          '400': '#38b2ac',
          '500': '#319795',
          '600': '#2c7a7b',
          '700': '#285e61',
          '800': '#234e52',
          '900': '#1d4044',
        },
        whatsapp: {
          500: '#25D366',
        },
        blue: {
          '50': '#ebf8ff',
          '100': '#bee3f8ee',
          '200': '#90cdf4',
          '300': '#63b3ed',
          '400': '#4299e1dd',
          '500': '#3182ce',
          '600': '#2b6cb0',
          '700': '#2c5282',
          '800': '#2a4365',
          '900': '#1A365D',
        },
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['active', 'hover'],
    },
  },
  plugins: [],
};
