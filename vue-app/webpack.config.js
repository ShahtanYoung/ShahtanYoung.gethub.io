const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const { webpack } = require("webpack");
const chalk = require("chalk");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");

module.exports = {
  mode: "production",
  entry:  path.join(__dirname, "src/main.js") ,
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist"),
  },
  performance: {
    hints: 'warning',
    maxEntrypointSize: 50000000000000,
    maxAssetSize: 3000000000000000,
    assetFilter: function (assetFilename) {
      return assetFilename.endsWith('.js');
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: "vue-loader",
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new VueLoaderPlugin(),
    new ProgressBarPlugin({
      format: `  :msg [:bar] ${chalk.green.bold(":percent")} (:elapsed s)`,
    }),
  ],

  devServer: {
    static: path.join(__dirname, "dist"),
    hot: true,
    port: 9001,
    open: true,
  },
};


const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/api": {
        target: "https://www.chengzier.cn",
        changeOrigin: true,
      },
    },
  },
});





