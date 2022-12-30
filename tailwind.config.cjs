const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["fira-code", ...defaultTheme.fontFamily.sans],
      serif: ["lato", ...defaultTheme.fontFamily.serif],
    },
    colors: {
      transparent: "transparent",
      black: "#212529",
      gray: "#CED4DA",
      white: "#F8F9FA",
    },
    extend: {
      spacing: {
        4.5: "1.125rem",
        7.5: "1.875rem",
        "8/4": "150%",
      },
      fontSize: {
        hidden: "0px",
        "9.5xl": "7.5vw",
        "10xl": "9vw",
        "12xl": "11vw",
      },
      flex: {
        unset: "0 0 auto",
      },
      minHeight: {
        "screen-3": "300vh",
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("child", "& > *");
    }),
    plugin(({ addUtilities }) => {
      addUtilities({
        ".perspective": {
          perspective: "1000rem",
        },
      });
    }),
  ],
};
