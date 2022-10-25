/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          rl: "#34911F",
          dd: "#a21caf",
        },
        background: {
          light: "#e7e5e4",
        },
        accent: {
          light: "#fafafa",
          dark: "#171717",
        },
        grayscale: {
          1: "#FFFFFF",
          2: "#F2F2F2",
          3: "#d1d1d1",
          4: "#6E6E73",
        },
      },
    },
  },
  plugins: [],
};
