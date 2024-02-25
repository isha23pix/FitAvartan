/* eslint-disable import/no-extraneous-dependencies */
const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle-dev.js",
  },
  devServer: {
    port: 8080,
    hot: true,
    proxy: {
      '/app': 'http://localhost:8080' 
    }
  }
});
