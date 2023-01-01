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
        "1/10": "10%",
        "2/10": "20%",
        "3/10": "30%",
        "4/10": "40%",
      },
      fontSize: {
        hidden: "0px",
        "8.5xl": "4vw",
        "9.5xl": "6vw",
        "10xl": "9vw",
        "12xl": "11vw",
      },
      flex: {
        unset: "0 0 auto",
      },
      height: {
        "screen-6": "600vh",
      },
      minHeight: {
        "screen-2": "200vh",
        "screen-3": "300vh",
      },
      rotate: {
        9: "9deg",
        19: "19deg",
        26: "26deg",
      },
      translate: {
        "screen-w-1/100": "1vw",
        "screen-w-1/10": "10vw",
        "screen-w-1/2": "50vw",
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
