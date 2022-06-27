const webpackConfigProduction = require("./webpack.config.prod");

module.exports = {
  //先展开生产环境的配置，需要的话,在后续补充或者覆盖
  ...webpackConfigProduction,

  //devServer服务器配置
  devServer: {
    port: "8888",
    open: true,
    compress: true,
    liveReload: true,
    //服务端对history路由的支持
    historyApiFallback: true
  },

  //设置模式
  mode: "development"
}