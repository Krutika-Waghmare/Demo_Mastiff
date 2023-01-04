/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, js, ejs}"],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        'body-color': '#FAFAF9'
      },
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        md: '640px',
        lg: '768px',
        xl: '1024px',
      '2xl': '1124px',
      }
    },
    
  },
  plugins: [],
}
