preset-env将ES6转ES5,但是Map promise等是不支持的，需要引入prolyfill,
```
yarn add @babel/polyfill --dev
```
在入口文件中，引入import "@babel/polyfill" 引入polyfill，但是此时会把所有的引入，通过设置`"useBuiltIns": "usage"` 会自动按需引入，可以将入口引入删除
```ruby
["@babel/preset-env", {
      "targets":{
        "chrome": "58",
        "ie": "11"
      },
      "useBuiltIns": "usage"
    }],
```
这种方法适用业务流程，因为polyfill 会产生全局污染，适合库开发
```
@babel/plugin-transform-runtime
@babel/runtime

```
在.babelrc中plugins中配置如下
```
"plugins": [
  [
    "@babel/plugin-transform-runtime",
    {
      "absoluteRuntime": false,
      "corejs": 2,
      "helpers": true,
      "regenerator": true,
      "useESModules": false
    }
  ]
]
```
将corejs设置2需要安装@babel/runtime-corejs2，安装
```ruby
  yarn add @babel/runtime-corejs2 --dev
```