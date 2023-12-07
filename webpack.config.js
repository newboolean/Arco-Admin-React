/*
 * @Author: newboolean sunjiyan1228@163.com
 * @Date: 2023-12-07 21:47:45
 * @LastEditors: newboolean sunjiyan1228@163.com
 * @LastEditTime: 2023-12-07 22:24:19
 * @FilePath: \Arco-Admin-React\webpack.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

const getStyleHandle = () => {
  return [
    "style-loader",
    "css-loader",
    {
      loader: "postcss-loader",
      options: {
        postcssOptions: {
          plugins: ["postcss-preset-env"],
        },
      },
    },
    pre,
  ].filter(Boolean);
};
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "static/js/[name].js",
    chunkFilename: "static/js/[name].chunk.js",
    assetsModuleFilename: "static/media/[hash:10][ext][query]",
  },
  module: {
    rules: [
      // 处理css
      {
        test: /\.css$/,
        use: getStyleHandle(),
      },
      {
        test: /\.less$/,
        use: getStyleHandle("less-loader"),
      },
      {
        test: /\.s[ac]ss$/,
        use: getStyleHandle("sass-loader"),
      },
      {
        test: /\.styl$/,
        use: getStyleHandle("stylus-loader"),
      },
      // 处理图片
      {
        test: /\.(jpe?g|png|gif|webp|svg)/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
      },
      {
        test: /\.(woff2?|ttf)/,
        type: "asset/resource",
      },
      // 处理js
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      title: "React App",
      template: "index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
  // 处理html文件
};
