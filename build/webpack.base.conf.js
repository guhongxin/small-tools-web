const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const config = require('../config')
const resolve = (dir) => {
  return path.join(__dirname, '..', dir)
}
module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    main: resolve('src/main.js')
  },
  output: {
    filename: 'js/[name]_[contenthash:8].js',
    path: resolve('dist')
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: [/node_modules/],
      loader: 'babel-loader'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('template/index.html'),
      filename: 'index.html',
      title: '小工具',
      favicon: resolve('template/favicon.ico')
    }),
    new CleanWebpackPlugin(),
  ]
}