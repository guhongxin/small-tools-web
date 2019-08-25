const path = require('path')
const merge = require('webpack-merge')
const webpackbaseConf = require('./webpack.base.conf')
const webpack = require('webpack')
const config = require('../config')

const resolve = (dir) => {
  return path.join(__dirname, '..', dir)
}
const webpackprodConf = {
  devtool: config.prod.devtool,
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new webpack.DefinePlugin({ //环境变量
      // 定义 NODE_ENV 环境变量为 production，以去除源码中只有开发时才需要的部分
      'process': {
        'env': require('../config/prod.env')
      }
    }),
  ]
}
module.exports = merge(webpackbaseConf, webpackprodConf)