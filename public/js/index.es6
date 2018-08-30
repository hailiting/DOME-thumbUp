const praisseButton = require('./praisseButton')
const SystemJS = require('systemjs')
SystemJS.config({
  baseURL: '/scripts'
})
SystemJS.import('index.js').then(function(m) {
  // 挂载到jq上，形成jq组件
  $.extend({
      thumb: m.default
  });
  // 回调函数
  callBack();
})

function callBack() {
  var f = new $.thumb(0, $('#thumb'))
  f.clickAction();
}
console.log(111)