module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backdropBlur: {
        xs: '2px',
      },
      fontFamily: {
        modern: ['modernist', 'sans-serif'],
        modernBold: ['modernist-bold', 'sans-serif'],
        modernMono: ['modernist-mono', 'sans-serif'],
      },
      colors: {
        // PALETTE
        blackpalette: {
          100: '#FDFDFD',
          400: '#E5E5E5',
          600: '#363A3C',
          900: '#0C0E07',
        },
        lime: '#B5F514',
        cerise: '#C92CAC',
        greypalette: {
          100: '#FDFDFD',
          400: '#E5E5E5',
          600: '#CBD2D0',
        },
        whitepalette: '#FFFDFD',
      },
    },
  },
  plugins: [],
};
