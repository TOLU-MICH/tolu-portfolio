/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      8: "8px",
    },
    colors: {
      white: colors.white,
      black: colors.black,
      primary: {
        extraLight: "#f9fafa",
        darLight: "#0a0a0a",
        light: "#F3F2F2",
        mediumLight: "#DCE0E5",
        medium: "#7F7F7F",
        dark: "#1C1B1B",
      },
    },

    fontSize: {
      xs: ["0.75rem"],
      sm: ["0.875rem"],
      base: ["1rem"],
      lg: ["1.125rem"],
      xl: ["1.25rem"],
      "2xl": ["1.5rem"],

      "3xl": ["2.25rem"],
      "4xl": ["2.5rem"],
      "5xl": ["3rem"],
    },

    // amend these values to suit the chosen font
    fontWeight: {
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      black: "800",
    },

    screens: {
      "2xs": "320px",
      xs: "420px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1536px",
      "4xl": "1920px",
    },
    boxShadow: {
      bgShadow: "0px 4px 50px rgba(68, 68, 68, 0.0392157)",
    },

    extend: {
      fontFamily: {
        unBounded: ["Unbounded", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },

      zIndex: {
        "-1": "-1",
        100: 100,
        1000: 1000,
      },
      spacing: {
        // change 863 to whatever half of the max content width you want for wide screens is
        contained: "calc(50vw - 863px)",
        fullheight: "calc(var(--vh, 1vh) * 100)", // --vh var set on html tag by setDocHeight() in app.js
        gutter: "5vw",
        13: "3.125rem",
        15: "3.75rem",
        18: "4.5rem",
        19: "4.75rem",
        22: "5.5rem",
        25: "6.25rem",
        75: "18.75rem",
        114: "28.5rem",
        125: "31.25rem",
      },
    },
  },
  plugins: [],
};
