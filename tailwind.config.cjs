/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx, mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#34911F",
        light: {
          neutral: {
            100: "#D1D1D1",
            200: "#F9F9F9",
            300: "#E7E5E4",
          },
          text: {
            100: "#000000",
            200: "#525252",
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
