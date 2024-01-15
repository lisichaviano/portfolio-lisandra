const NAV_HEIGHT = "92px";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  daisyui: {
    // themes: ["light"],
    themes: [
      {
        mytheme: {
          primary: "#DE3935",
          secondary: "#8BAEC2",
          accent: "#1dcdbc",
          neutral: "#2b3440",
          "base-100": "#ffffff",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
        },
      },
    ],
  },
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
      boxShadow: {
        card: "0 0 5px rgba(0, 0, 0, 0.5)",
        "sm-inverted": "0 -1px 2px 0 rgb(0 0 0 / 0.05)",
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
      spacing: {
        navbar: NAV_HEIGHT,
        content: `calc(100vh - ${NAV_HEIGHT})`,
      },
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
