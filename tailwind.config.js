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
    },
  },
  plugins: [],
};
