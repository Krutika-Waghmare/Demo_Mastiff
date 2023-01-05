/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, js, ejs}"],
  theme: {
    extend: {
      colors: {
        primary: '#1d4ed8',
        secondary: '#34d399',
        'body-color': '#6b7280'
      },
    },
    container: {
      center: true,
      padding: '2rem',
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
