/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7867ED',
        light: '#F3FAFF',
        gray: '#EAEBEC',
        hover: '#D58F76',
        secondary_gray: '#696161',
      }
    },
  },
  plugins: [],
}