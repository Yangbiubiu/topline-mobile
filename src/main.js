import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 按需注册 Vant 组件
import { Button } from 'vant'

Vue.use(Button) // 用Vue.use(xxx)的方法去全局注册组件
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
