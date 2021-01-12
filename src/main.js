// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './axios配置'
//引入组件
import Vant from 'vant'
//引入样式
import 'vant/lib/index.css'
//作为中间件使用
Vue.use(Vant)

Vue.config.productionTip = false

// 替换vue本来的http模块
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
