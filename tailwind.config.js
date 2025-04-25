const withMT = require("@material-tailwind/react/utils/withMT");
// tailwind.config.js
module.exports = withMT({
  darkMode: 'class', // Enables manual class-based dark mode
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#ff4747',
        'accent-light': '#e50914',
        secondary: '#ffae00',
      },
    },
  },
  plugins: []
});
