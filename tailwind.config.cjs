const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["fira-code", ...defaultTheme.fontFamily.sans],
      serif: ["lato", ...defaultTheme.fontFamily.serif],
    },
    colors: {
      black: "#212529",
      gray: "#CED4DA",
      white: "#F8F9FA",
    },
    extend: {
      fontSize: {
        hidden: "0px",
        "10xl": "9vw",
      },
      flex: {
        unset: "0 0 auto",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
    },
  ],
};
