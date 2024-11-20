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
    }
  }, plugins: []
};

