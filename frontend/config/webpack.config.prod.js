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

  //loader的配置
  module: {
    rules: [
      //我们刚开始路由中渲染的是html类型，需要使用html-loader
      /* {
        test: /\.html$/i,
        use: [
          'html-loader'
        ]
      }, */

      //ejs的loader
      {
        test: /\.ejs$/i,
        loader: 'ejs-loader',
        // 可以在模块当中使用data接受外部传入ejs的数据进行数据处理
        options: {
          variable: 'data',
        }
      }
    ]
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

  resolve: {
    //配置路径别名
    alias: {
      $v: path.resolve(__dirname, "../src/views")
    },

    //配置引入文件时 省略后缀,自动添加后缀的顺序
    extensions: [".js", ".json", ".ejs"]
  },

  mode: "production"
}