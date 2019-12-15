/* eslint-disable */
module.exports = {
  plugins: {
    "postcss-easy-import": {},
    "postcss-nested": {},
    "postcss-flexbugs-fixes": {},
    "postcss-preset-env": {
      autoprefixer: {
        flexbox: "no-2009",
      },
      preserve: false,
      stage: 0,
      importFrom: ["variables.css"],
    },
  },
}
