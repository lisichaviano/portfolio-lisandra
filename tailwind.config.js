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
      sm: "14px",
      "sm-2": "13.2px",
      "8xl": "27px",
      mid: "17px",
      "6xl": "25px",
      "sm-9": "13.9px",
      "base-1": "16.1px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
