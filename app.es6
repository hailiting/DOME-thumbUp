const Koa = require('koa')
const router = require('koa-simple-router')
const initIndex = require('./router/initIndex.js')
const render = require('koa-swig')
const co = require('co')
const Config = require('./config/config.js')
const serve = require('koa-static')
const app = new Koa();
// 路由配置
initIndex.default.init(app,router);
// // 渲染
app.context.render = co.wrap(render({
  root: Config.default.get('viewDir'),
  autoescape: true,
  cache: 'memory',
  ext: 'html'
}));
app.use(serve(Config.default.get('staticDir')));
app.listen(Config.default.get('port'));