/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        semibold: '600',
        bold: '700',
      },
      colors: {
        primary: '#543B85',
        secondary: '#944FFA',
        bgColor: '#292E36',
        blackColor: '#21252B',
        whiteColor: '#FFFFFF',
      }
    },
  },
  plugins: [],
}

