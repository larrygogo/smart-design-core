const path = require("path")
const utils = require("./utils")
const webpack = require("webpack")
const nodeExternals = require("webpack-node-externals")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const webpackConfig = {
  target: "node",
  entry: path.join(utils.APP_PATH, "index.ts"),
  output: {
    filename: "[name].bundle.js",
    path: utils.DIST_PATH,
    library: "smartDesgin",
    libraryExport: "default",
    globalObject: "this",
    libraryTarget: 'umd'
  },
  module: {
    rules: [{
      test: /\.ts$/,
      use: {
        loader: "ts-loader"
      },
      exclude: [path.join(__dirname, "../node_modules")]
    },{
      test: /\.(html)$/,
      use: {
        loader: "file-loader"
      },
      exclude: [path.join(__dirname, "../node_modules")]
    }]
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  externals: [nodeExternals()],
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": (process.env.NODE_ENV === "production" || process.env.NODE_ENV === "prod") ? "'production'" : "'development'"
      }
    })
  ],
  node: {
    console: true,
    global: true,
    process: true,
    Buffer: true,
    __filename: true,
    __dirname: true,
    setImmediate: true,
    path: true
  }
}

module.exports = webpackConfig