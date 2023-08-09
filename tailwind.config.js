module.exports = {
  purge: { content: ["./src/**/*.js"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#738678",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
