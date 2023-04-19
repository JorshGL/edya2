/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: {
          gray: {
            main: "#121212",
            soft: "#353535",
          },
          blue: {
            main: "#3797EF"
          },
          yellow: {
            main: "#FBAA47"
          },
          red: {
            main: "#D91A46"
          },
          purple: {
            main: "#A60F93"
          }
        },
      },
    },
  },
  plugins: [],
};
