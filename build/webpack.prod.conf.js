const path = require('path')
const merge = require('webpack-merge')
const webpackbaseConf = require('./webpack.base.conf')
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
  plugins: []
}
module.exports = merge(webpackbaseConf, webpackprodConf)