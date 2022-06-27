const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin")
module.exports = {
  //入口配置
  entry: path.resolve(__dirname, "../src/index.js"),

  //出口配置
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "./js/main.js"
  },

  //插件的配置
  plugins: [
    //生成html文件 并设置对应的参照模板
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html")
    }),
    //复制public文件到打包目录，忽略index.html
    new CopyWebpackPlugin({
      patterns: [{
        from: path.resolve(__dirname, "../public"),
        to: "public",
        globOptions: {
          ignore: ["**/index.html"]
        }
      }],
    })
  ],

  mode: "production"
}