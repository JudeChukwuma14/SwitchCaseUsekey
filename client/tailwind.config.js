/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        home:"url('./src/assets/image/family.jpg')"
      },
      fontFamily: {
        
      },
    },
  },
  plugins: [],
}