import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter) // 用Vue.use(xxx)的方法去全局注册组件
// 实例化路由对象
const router = new VueRouter({
  // 配置路由表
  routes: []
})

export default router//  导出 自定义的router模板
