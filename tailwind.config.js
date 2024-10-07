/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    './public/index.html'        // Include the main HTML file if you're using it
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      lineHeight: {
        '24': '6rem',
      },
      colors: {
        primary: '#2B2B2B',
        secondary: '#2ecc71',
        textColor: '#FFFFFF',
        backgroundColor: '#f5f5f5',
        lightpurple: '#BFAFF2',
        yellow: '#F2D783',
        darkcharcoal: '#333333',
        demobg: '#FDF5DF',
        testimonialbg: "#BFAFF2"
      },
    },
  },
  plugins: [],
}

