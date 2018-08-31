# 点赞功能开发（前后端结合，数据库）
## 第一步：koa环境配置
### 1.1 配置package.json
~~~
npm i --save-dev babel-cli babel-polyfill babel-preset-env babel-register // es6编译
path // node path模块
systemjs // 支持export
jquery // DOM操作
koa // koa框架
koa-simple-router // koa路由
co  // koa2嫁接
koa-swig // 页面渲染render
koa-static // 静态资源加载

"devDependencies": {
    "babel-plugin-transform-runtime": "^6.23.0",
    "babel-preset-es2015": "^6.22.0",
    "babel-preset-stage-0": "^6.22.0",
    "protractor": "^5.1.1",
    "selenium-standalone": "^6.0.1",
    "selenium-webdriver": "^3.1.0",
    "supertest": "^3.0.0"
  },
  "dependencies": {
    "babel-polyfill": "^6.23.0",
    "babel-register": "^6.23.0",
    "co": "^4.6.0",
    "jquery": "^3.3.1",
    "koa": "^2.5.2",
    "koa-simple-router": "^0.2.0",
    "koa-static": "^5.0.0",
    "koa-swig": "^2.2.1",
    "path": "^0.12.7",
    "systemjs": "^0.21.4"
  }
~~~
### 1.2 文件夹配置
~~~
// 文件夹
config ______ app.js的基本配置（高类聚，低耦合
router ______ 页面路由配置
middleware _________ 容错的一些页面 
api _________ 端口请求封装
public ______ 公共资源（js,css,img等）
pages ______ 页面
test _____ 测试用例
// 根目录
app.js
~~~
#### 1.2.1 配置.babelrc
~~~
{
  "presets": [
    "es2015",
    "stage-0"
  ],
  "plugins": [
    [
      "transform-runtime",
      {
        "helpers": false,
        "polyfill": false,
        "regenerator": true,
        "moduleName": "babel-runtime"
      }
    ]
  ]
}
~~~
## 用php做接口
  axios && request-promise 做ajiax请求中间层
## 自动化测试
~~~
// 下载supertest模块
// selenium-webdriver 模块
~~~
  
