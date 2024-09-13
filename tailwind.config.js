/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      kumbhSans: 'Kumbh Sans',
    },
    extend: {
      colors: {
        Orange: ' hsl(26, 100%, 55%)',
        paleOrange: 'hsl(25, 100%, 94%)',
        veryDarkBlue: 'hsl(220, 13%, 13%)',
        darkGrayishBlue: 'hsl(219, 9%, 45%)',
        grayishBlue: 'hsl(220, 14%, 75%)',
        lightGrayishBlue: ' hsl(223, 64%, 98%)',
        white: 'hsl(0, 0%, 100%)',
        blackWithOpacityForLightboxBackground: 'hsl(0, 0%, 0%)',
      },
      boxShadow: {
        'bottom-xl': '0 20px 25px -5px rgba(0,0,0,0.05),0 10px 10px -5px rgba(0,0,0,0.02)',
      },
    },
  },
  plugins: [],
};
