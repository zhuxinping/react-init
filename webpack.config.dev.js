let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry:'./src/index.js',
  output: {
    path:require('path').resolve('./dist'),
    filename: "build.js"
  },
  module: {
    rules:[
      {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
      {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
      {test:/\.(jpg|png|gif)$/,use:'url-loader'}
    ]
  },
  devtool: 'source-map', // 源码映射 方便映射
  plugins: [
    new HtmlWebpackPlugin({
      template:'./index.html'
    })
  ]
};