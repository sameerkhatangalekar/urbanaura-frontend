/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        urbanist: ['Urbanist']
      },
      keyframes: {
        'slide': {
          '0%': {
            transform: 'translateX(300%)'
          },
          '100%': {
            transform: 'translateX(-300%)'
          }
        }
      },
      animation: {
        'slide': 'slide 10s infinite linear'
      },
      screens: {
        'mobile': '600px'
      }


    },
  },
  plugins: [],
}

