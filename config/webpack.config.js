const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const devSettings = {
  entry: ["react-hot-loader/patch", "./src/browser/index.js"],
  devServer: {
    hot: true,
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "index.html"),
      files: {
        js: ["main.js"],
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          babelrc: false,
          presets: ["es2015", "react"],
          plugins: ["react-hot-loader/babel"],
        },
      },
    ],
  },
  resolve: {
    mainFields: ["main"],
  },
};

const analyzeSettings = {
  entry: ["./src/browser/index.js"],
  plugins: [new BundleAnalyzerPlugin()],
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          babelrc: false,
          presets: ["es2015", "react"],
        },
      },
    ],
  },
  resolve: {
    mainFields: ["main"],
  },
};

module.exports = process.env.BUNDLE_ANALYZE ? analyzeSettings : devSettings;
