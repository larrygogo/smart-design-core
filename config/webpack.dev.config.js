const webpackMerge = require("webpack-merge")
const baseWebpackConfig = require("./webpack.base.config")

// @ts-ignore
const webpackConfig = webpackMerge(baseWebpackConfig, {
  mode: "development",
  devtool: "eval-source-map",
  stats: { children: false }
})

module.exports = webpackConfig