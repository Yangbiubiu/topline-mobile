import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.less'
// 验证配置
import {
  ValidationProvider,
  extend,
  ValidationObserver
} from 'vee-validate'
import * as rules from 'vee-validate/dist/rules' // 加载所有的验证规则
import zhCN from 'vee-validate/dist/locale/zh_CN' //
// 按需注册 Vant组件
// import { Button } from 'vant'
// 按需注册 Vant 组件的组合写法
import {
  Button,
  Cell,
  CellGroup,
  Tabbar,
  TabbarItem,
  Field,
  NavBar,
  Toast
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
  .use(Field)
  .use(NavBar)
  .use(Toast)

// loop over all rules
for (let rule in rules) {
  extend(rule, {
    ...rules[rule], // add the rule
    message: zhCN.messages[rule] // add its message
  })
}

// 一个原则：有内置的使用内置的，内置的满足不了再自定义
extend('phone', {// 可自定义一个验证规则 自定义名字为phone
  validate (value) { // 验证用的方法
    return /^1\d{10}$/.test(value)
  },
  message: '必须是手机号' // 验证失败提示消息
})
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
