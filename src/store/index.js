import Vue from 'vue'
import Vuex from 'vuex'
import { getItem, setItem } from '@/utils/storage'
Vue.use(Vuex)

export default new Vuex.Store({ // 导出 自定义创建的Store容器模板
  // 固定语法
  state: { // 类似data 响应式的
    // 1. 初始化一个数据 user是一个容器用来保存token 未登录时候没有token user容器为空
    // user: null
    user: getItem('user') // 取本地存储的数据
  },
  mutations: { // 类似methods 同步操作
    // 2. 添加一个 mutation 用于修改 state 参数1永远是state 参数2为用户传入的数据user
    // 3. 当用户登录成功，调用 mutation 将 token 放到 Vuex 容器中
    setUser (state, user) {
      // console.log(state)
      state.user = user
      // 4. 为了防止页面刷新数据丢失，所以还需要将数据state.user存储到本地存储
      setItem('user', state.user)
    }
  },
  actions: { // 类似methods 处理异步操作

  }
})
