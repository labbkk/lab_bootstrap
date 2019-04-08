const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const autoprefixer = require("autoprefixer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackIncludeAssetsPlugin = require("html-webpack-include-assets-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const UglifyJS = require("uglify-es");

const DefaultUglifyJsOptions = UglifyJS.default_options();
const compress = DefaultUglifyJsOptions.compress;
for (let compressOption in compress) {
  compress[compressOption] = false;
}
compress.unused = true;

module.exports = {
  performance: {
    hints: false
  },
  mode: "production",
  optimization: {
    minimize: true,
    minimizer: [new UglifyJsPlugin()],
    usedExports: true,
    sideEffects: true
  },
  entry: "./dist/js/main.js",
  output: {
    path: path.join(__dirname, "dist/"),
    filename: "js/main.es5.js"
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from:
          "./node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js",
        to: "js/3rdparty"
      },
      {
        from: "./node_modules/@webcomponents/webcomponentsjs/bundles",
        to: "js/3rdparty/bundles"
      },
      {
        from: "./node_modules/@babel/polyfill/dist/polyfill.js",
        to: "js/3rdparty"
      }
    ]),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      filename: "index.es5.html"
    }),
    new HtmlWebpackIncludeAssetsPlugin({
      assets: [
        "css/main.css",
        "js/3rdparty/polyfill.js",
        "js/3rdparty/webcomponents-loader.js"
      ],
      append: false
    }),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true)
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"]
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: [autoprefixer()]
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  }
};
