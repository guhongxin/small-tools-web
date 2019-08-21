const path = require('path')
const resolve = (dir) => {
  return path.join(dir)
}
module.exports = {
  dev: {
    contentBase: resolve('dist'), // 运行目录
    port: 9000, // 端口
    quiet: false, // 控制台中不输出打包的信息
    host: 'localhost'
  },
  prod: {

  }
}