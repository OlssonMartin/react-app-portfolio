module.exports = {
  darkMode: 'class',  // Aktiverar dark mode baserat på klass
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        darkBlue: '#0A192F',  // För dark mode bakgrund
        lightBlue: '#E6F1FF', // För light mode bakgrund
      },
    },
  },
  plugins: [],
};