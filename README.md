# 点赞功能开发（前后端结合，数据库）
## 第一步：koa环境配置
### 1.1 配置package.json
~~~
npm i --save-dev babel-cli babel-polyfill babel-preset-env babel-register // es6编译

npm i --save-dev path // node path模块

npm i --save-dev systemjs // 支持export

npm i --save-dev jqueryjs // DOM操作

npm i --save-dev koa // koa框架
npm i --save-dev koa-simple-router // koa路由
npm i --save-dev co  // koa2嫁接
npm i --save-dev koa-swig // 页面渲染rander
npm i --save-dev koa-static // 静态资源加载
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
  "presets": ["env"]
}
~~~
