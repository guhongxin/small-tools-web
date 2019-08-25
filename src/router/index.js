import { Component } from "react";
const _import = require('./_import_' + process.env.NODE_ENV)
export const router = [{
  path: 'img2base64',
  name: '图片转换base64',
  key: '1',
  icon: 'icon-tupiantihuan',
  component: _import('img2base64/index')
}, {
  path: 'calcSting',
  name: '计算字符串长度',
  key: '2',
  icon: 'icon-zifuchuanshujuji',
  component: _import('calcstring/index')
}]
