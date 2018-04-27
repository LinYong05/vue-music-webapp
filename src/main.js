// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'

//移动端去 300 毫秒等待
import fastclick from 'fastclick' 
//图片懒加载
import VueLazyload from 'vue-lazyload'


// 导入状态管理器
import store from './store'

//全局共用
import rem from 'common/js/rem'               //rem


//全局样式
import 'common/stylus/index.styl'


Vue.config.productionTip = false

//去除移动端页面对于点击事件的300毫秒延迟
fastclick.attach(document.body)

Vue.use(VueLazyload, {
  loading: require('common/images/default.png')
})
/* eslint-disable no-new */
// Vue.use(router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})