const { withPigment } = require("@pigment-css/nextjs-plugin");

module.exports = withPigment({
  reactStrictMode: true,
  transpilePackages: ["ui"],
});
