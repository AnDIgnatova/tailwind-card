/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': {
            transform: 'translateY(-130px)',
          },

          '25%': {
            transform: 'translateY(calc(160px - 100%))',
          },

          '100%': {
            transform: 'translateY(calc(170px - 100%))',
          },
        },
      },
      animation: {
        slide: 'slide 1s forwards',
      },
    },
  },
  plugins: [],
}
