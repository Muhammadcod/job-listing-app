module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        'bright-red': '#EA5566',
        'dark-cyan-blue': '#0F4A7B',
        'light-blue': '#62BECB',
        'base-color': '#E5E5E5',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
