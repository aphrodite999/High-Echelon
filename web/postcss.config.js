module.exports = {
  plugins: [
    require("postcss-import"),
    require("autoprefixer"),
    require("postcss-nested"),
    require("cssnano")({
      preset: `default`,
    }),
    require("postcss-preset-env")({
      stage: 3,
      features: {
        "color-mod-function": { unresolved: "warn" },
        "nesting-rules": true,
        "custom-media-queries": {
          preserve: false,
        },
        "custom-properties": {
          preserve: false,
        },
      },
    }),
  ],
};
