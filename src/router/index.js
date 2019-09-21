import Vue from 'vue'
import VueRouter from 'vue-router'
import Tabbar from '@/views/tabbar'
import Login from '@/views/login'
// 用Vue.use(xxx)的方法去全局注册组件
Vue.use(VueRouter)
// 实例化路由对象
const router = new VueRouter({
  // 配置路由表
  routes: [
    {
      name: 'tabbar',
      path: '/tabbar',
      component: Tabbar
    },
    {
      name: 'login',
      path: '/login',
      component: Login
    }
  ]
})
export default router//  导出 自定义的router模板
