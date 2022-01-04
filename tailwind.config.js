module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      backgroundImage: (theme) => ({
        hero: "url('assets/heros.png')",
      }),
      colors: {
        'bright-red': '#EA5566',
        'dark-cyan-blue': '#0F4A7B',
        'light-blue': '#62BECB',
        'ted-gray': 'rgba(62, 62, 64, 0.7)',
        'ted-black': '#0E0E10',
        'base-color': '#E5E5E5',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
