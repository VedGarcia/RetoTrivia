/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '2w-screen': '200vw',
        '2h-screen': '200vh'
      }
    },

    
  },
  plugins: [],
}