/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./**/*.{html,js}", "!./node_modules/**/*.*"],
  theme: {
    fontFamily: {
      "black": "Poppins-Black, system-ui",
      "medium": "Poppins-Medium, system-ui",
      "regular": "Poppins-Regular, system-ui"
    },
    extend: {
      colors: {
        "accent": "#e6c744"
      }
    },
    screens: {
      "3xl": { "min": "1920px"},
      "2xl": { "max": "1535px" },
      "xl": { "max": "1279px" },
      "lg": { "max": "1023px" },
      "md": { "max": "767px" },
      "sm": { "max": "639px" }
    }
  }, plugins: []
};

