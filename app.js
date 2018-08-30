'use strict';

var Koa = require('koa');
var router = require('koa-simple-router');
var initIndex = require('./router/initIndex.js');
var render = require('koa-swig');
var co = require('co');
var Config = require('./config/config.js');
// import $ from 'jquery'
var app = new Koa();
// 路由配置
console.log(initIndex);
initIndex.default.init(app, router);
// // 渲染
console.log(Config);
// app.context.render = co.wrap(render({
//   root: Config.get('viewDir'),
//   autoescape: true,
//   cache: 'memory',
//   ext: 'html',
//   writeBody: false
// }));

app.listen(3000);
