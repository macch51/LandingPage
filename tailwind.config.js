/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    './public/index.html'        // Include the main HTML file if you're using it
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3498db',
        secondary: '#2ecc71',
        textColor: '#FFFFFF',
        backgroundColor: '#f5f5f5',
        purple: '#BFAFF2',
      },
    },
  },
  plugins: [],
}

