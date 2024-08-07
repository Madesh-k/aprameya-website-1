module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // Enable dark mode support
  theme: {
    extend: {
      colors: {
        custom: {
          900: "f3f2fc", // Custom color for dark mode
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
