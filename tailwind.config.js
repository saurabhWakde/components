/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
   extend: {
      clipPath: {
        'half-circle': 'ellipse(50% 100% at 50% 100%)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.clip-half-circle': {
          clipPath: 'ellipse(50% 100% at 50% 100%)',
        },
      });
    },
  ],
}