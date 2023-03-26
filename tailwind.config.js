/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    },
    extend: {
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
      colors: {
        "light-gold": "#EADECC",
        "dark-gold": "#958565",
        "circle-gold-dark": "#AF9C76",
        "circle-gold-light": "#DFCEB3",
      },
      animation: {
        circle1: "circle1 90s ease-in-out infinite",
        circle2: "circle2 90s ease-in-out infinite",
        fadeIn: "fadeIn 1.5s ease-in-out",
      },
      keyframes: {
        circle1: {
          "0%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(45%, -40%)" },
          "55%": { transform: "translate(90%, -20%)" },
          "75%": { transform: "translate(45%, 20%)" },
          "100%": { transform: "translate(0, 0)" },
        },
        circle2: {
          "0%": { transform: "translate(0, 0)" },
          "30%": { transform: "translate(35%, 40%)" },
          "48%": { transform: "translate(90%, 20%)" },
          "65%": { transform: "translate(65%, -30%)" },
          "100%": { transform: "translate(0, 0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
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
