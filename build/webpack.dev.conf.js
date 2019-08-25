const path = require('path')
const webpackBaseConf = require('./webpack.base.conf')
const merge = require('webpack-merge')
const webpack = require('webpack')
const config = require('../config')
const resolve = (dir) => {
  return path.join(__dirname, '..', dir)
}
const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const webpackDevConf = {
  devtool: config.dev.devtool,
  devServer: {
    contentBase: config.dev.contentBase,
    port: PORT || config.dev.port,
    host: HOST || config.dev.host,
    compress: true, // 开启gzip压缩
    progress: config.dev.progress // 显示打包的进度
  },
  plugins: [
    new webpack.DefinePlugin({ //环境变量
      // 定义 NODE_ENV 环境变量为 production，以去除源码中只有开发时才需要的部分
      'process': {
        'env': require('../config/dev.env')
      }
    }),
  ]
}
module.exports = merge(webpackBaseConf, webpackDevConf)