const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
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
    }, {
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader' 
      ]
    }, {
      test: /\.less$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        {
          loader: 'less-loader',
          options: {
            sourceMap: true,
            modifyVars: {
              'primary-color': '#1DA57A',
              'link-color': '#1DA57A',
              'border-radius-base': '2px'
            },
            javascriptEnabled: true   // 此项不能忘
          }
        }
      ]
    }, {
      test: /\.(eot|woff2?|ttf|svg)$/,
      use: [
        {
          loader: "url-loader",
          options: {
            name: "[name]-[hash:5].min.[ext]",
            limit: 5000, // fonts file size <= 5KB, use 'base64'; else, output svg file
            publicPath: "fonts/",
            outputPath: "fonts/"
          }
        }
      ]
    }, {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: 'images/[name]_[hash:5].[ext]'
          }
        }
      ]
    }]
  },
  resolve: {
    alias: {
      '@': resolve('src')
    },
    extensions: ['.js', '.json']
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new CopyWebpackPlugin([{ 
      from: resolve('static'),
      to:  resolve('dist/static')
    }]),
    new MiniCssExtractPlugin({
  　　filename: "css/[name].[chunkhash:8].css",
  　　chunkFilename: "css/[id].css"
　　 }),
    new HtmlWebpackPlugin({
      template: resolve('template/index.html'),
      filename: 'index.html',
      title: '小工具',
      favicon: resolve('template/favicon.ico')
    }),
    new CleanWebpackPlugin(),
  ]
}