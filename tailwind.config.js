/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        firebrick: "#bb2423",
        linen: "#f4ece6",
        gray: "rgba(255, 255, 255, 0)",
        thistle: "#ffd1ea",
      },
      screens: {
        // The values are "min-width", so they are the starting widths from which the style will activate
        sm: "600px",
        md: "905px",
        lg: "1240px",
        xl: "1440px",
      },
      width: {
        "xl-content": "1120px",
        "2xl-content": "1440px",
      },
      spacing: {},
      fontFamily: {
        questrial: "Questrial",
        inter: "Inter",
        syne: "Syne",
      },
      borderRadius: {
        "81xl": "100px",
      },
    },
    fontSize: {
      xs: ["12px"],
      sm: ["14px"],
      base: ["16px"],
      lg: ["18px"],
      xl: ["20px"],
      "2xl": ["24px"],
      "3xl": ["30px"],
      "4xl": ["36px"],
      "5xl": ["48px"],
      "6xl": ["64px"],
    },
  },
  corePlugins: {
    preflight: false,
  },
};
