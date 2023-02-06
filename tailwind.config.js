/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    },
    extend: {
      colors: {
        "light-gold": "#EADECC",
        "dark-gold": "#958565",
        "circle-gold-dark": "#AF9C76",
        "circle-gold-light": "#DFCEB3",
      },
      animation: {
        circle1: "circle1 100s ease-in-out infinite",
        circle2: "circle2 100s ease-in-out infinite",
      },
      keyframes: {
        circle1: {
          "0%": { opacity: 0, transform: "translate(0, 0)" },
          "25%": { opacity: 0.1, transform: "translate(45%, -40%)" },
          "55%": { opacity: 0.1, transform: "translate(90%, -20%)" },
          "75%": { opacity: 0.1, transform: "translate(45%, 20%)" },
          "100%": { opacity: 0, transform: "translate(0, 0)" },
        },
        circle2: {
          "0%": { opacity: 0, transform: "translate(0, 0)" },
          "30%": { opacity: 0.4, transform: "translate(35%, 40%)" },
          "48%": { opacity: 0.4, transform: "translate(90%, 20%)" },
          "65%": { opacity: 0.4, transform: "translate(65%, -30%)" },
          "100%": { opacity: 0, transform: "translate(0, 0)" },
        },
      },
      width: {
        192: "48rem",
      },
      height: {
        192: "48rem",
      },
    },
  },
  plugins: [],
};
