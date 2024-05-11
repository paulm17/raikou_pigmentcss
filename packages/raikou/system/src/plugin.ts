module.exports = {
  corePlugins: {
    preflight: false,
  },
  darkMode: ["class", '[data-raikou-color-scheme="dark"]'],
  plugins: [
    require("../src/core/RaikouProvider/global.plugin"),
    require("../src/core/RaikouProvider/css-variables.plugin"),
  ],
};
