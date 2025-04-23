// tailwind.config.js
module.exports = {
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
  plugins: [],
};
