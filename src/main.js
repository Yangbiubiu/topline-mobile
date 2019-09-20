import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// // 按需注册 Vant组件
// import { Button } from 'vant'
// 按需注册 Vant 组件的组合写法
import {
  Button,
  Cell,
  CellGroup,
  Tabbar,
  TabbarItem
} from 'vant'
// 按需注册 amfe-flexible组件（动态设置html标签的字体大小）
import 'amfe-flexible/index.js'
// Vue.use(Button) // 用Vue.use(xxx)的方法 全局注册组件
// 用Vue.use(xxx)的方法 全局注册组件组合写法
Vue
  .use(Button)
  .use(Cell)
  .use(CellGroup)
  .use(Tabbar)
  .use(TabbarItem)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
