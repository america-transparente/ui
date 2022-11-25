/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx, mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#34911F",
        light: {
          neutral: {
            100: "#FFFFFF",
            200: "#F9F9F9",
            300: "#d1d1d1",
          },
          text: {
            100: "#171717",
            200: "#707172",
          },
        },
        dark: {
          neutral: {
            100: "#484848",
            200: "#2F2F2F",
            300: "#242424",
          },
          text: {
            100: "#E4E4E4",
            200: "#A0A0A0",
          },
        },
      },
    },
  },
  plugins: [],
};
