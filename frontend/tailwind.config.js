/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',

    },
    extend: {
      colors: {
        vuejs: {
          100: "#DAFFFB",
          200: "#64CCC5",
          300: "#176B87",
          400: "#04364A",
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
