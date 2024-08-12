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
      screens: {
        'xs': '450px',   // Custom breakpoint for extra small screens
        'xxxsm':'500px',
        'xxsm':'550px',
        'xsm':'600px',
        'sm': '640px',
        'smd': '720px',   // Custom breakpoint for small screens
        'md': '768px',   // Custom breakpoint for medium screens
        'lg': '1024px',  // Custom breakpoint for large screens
        'xl': '1280px',  // Custom breakpoint for extra large screens

        '2xl': '1440px', // Custom breakpoint for extra large screens
        '2xl': '1440px', // Custom breakpoint for extra large screens
        // You can add more custom breakpoints here
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