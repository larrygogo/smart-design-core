const webpackMerge = require("webpack-merge")
const baseWebpackConfig = require("./webpack.base.config")
const TerserWebpackPlugin = require("terser-webpack-plugin")
// @ts-ignore
const webpackConfig = webpackMerge(baseWebpackConfig, {
  mode: "production",
  stats: { children: false, warnings: false },
  optimization: {
    minimizer: [
      new TerserWebpackPlugin({
        terserOptions: {
          warnings: false,
          compress: {
            warnings: false,
            // 是否注释console
            drop_console: false,
            dead_code: true,
            drop_debugger: true
          },
          output: {
            comments: false,
            beautify: false
          },
          mangle: true
        },
        parallel: true,
        sourceMap: false
      })
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
          name: "commons",
          chunks: "initial",
          minChunks: 3,
          enforce: true
        }
      }
    }
  }

})

module.exports = webpackConfig
