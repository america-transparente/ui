/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx, mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#34911F",
        grayscale: {
          1: "#FFFFFF",
          2: "#F2F2F2",
          3: "#e7e5e4",
          4: "#d1d1d1",
          5: "#6E6E73",
        },
      },
    },
  },
  plugins: [],
};
