<template>
  <div>
    <van-nav-bar title="登录" />
    <!-- van-cell-group 仅仅是提供了一个上下外边框，能看到包裹的区域 -->
    <van-cell-group>
       <!-- 绑定用户认证数据  -->
      <van-field
       v-model="user.mobile"
        required
        clearable
        label="手机"
        placeholder="请输入手机号"
      />
       <!-- 绑定用户认证数据  -->
      <van-field
       v-model="user.code"
        type="password"
        label="验证码"
        placeholder="请输入验证码"
        required
      />
    </van-cell-group>
    <div class="login-btn">
      <van-button type="info" @click='onLogin'>登录</van-button>
    </div>
  </div>
</template>

<script>
// 使用封装好的请求模块
import request from '@/utils/request'

export default {
  name: 'LoginIndex',
  // 用户认证（登录注册）
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      }
    }
  },

  methods: {
    async onLogin () {
      // 获取表单数据
      //  发送请求
      // 之前已经定义了变量request用来保存 axios.create实例（它的作用和axios是一样的）
      const { data } = await request({ // 对象给对象赋值
        method: 'POST',
        url: '/app/v1_0/authorizations',
        data: this.user
      })
      console.log(data)
      //  根据结果进行后续处理
    }
  }
}
</script>

<style lang="less" scoped>
.login-btn {
  padding: 20px;
  .van-button {
    width: 100%;
  }
}
</style>
