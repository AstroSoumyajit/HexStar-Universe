module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '1024px',
      // => @media (min-width: 1024px) { ... }

      lg: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      screens: {
        tablet: '640px',
        // => @media (min-width: 640px) { ... }

        laptop: '1024px',
        // => @media (min-width: 1024px) { ... }

        desktop: '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      fontFamily: {
        gilroy: ['gilroy', 'Sans-serif'],
        cascade: ['cascade', 'Sans-Serif'],
        sweet_sans_pro: ['sweet-sans-pro', 'Sans-Serif'],
        sweet_sans_pro_light: ['sweet-sans-pro-light', 'Sans-Serif'],
        bank_gothic: ['bank-gothic', 'Sans-Serif'],
        Europa_Gro: ['Europa_Gro', 'Sans-Serif'],
      },
      backgroundImage: {
        connectbg: "url('/Images/connect/connect.png')",
        background: "url('/Images/events/bluebg.png')",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide'),
    function({addVariant}) {
      addVariant ('child', '& > *');
      addVariant ('child-hover', '& > *:hover');
    },
  ],
};
