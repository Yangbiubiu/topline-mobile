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
       <!-- 给登录按钮注册点击事件onLogin -->
      <van-button type="info" @click='onLogin'>登录</van-button>
    </div>
  </div>
</template>

<script>
// 使用封装好的请求模块
// import request from '@/utils/request'
import { login } from '@/api/user'
export default {
  name: 'LoginIndex',
  // 用户认证（登录注册）
  data () {
    return {
      user: {
        // 方便测试写死数据
        mobile: '15201230123',
        code: '246810'
      }
    }
  },

  methods: {
    // 点击登录事件onLogin
    async onLogin () {
      // 获取表单数据
      //  发送请求
      // 之前已经定义了变量request用来保存 axios.create实例（它的作用和axios是一样的）
      // 封装以下代码 不用写了
      // const { data } = await request({ // 对象给对象赋值
      //  method: 'POST',
      //  url: '/app/v1_0/authorizations',
      //  data: this.user
      // })

      try {
        const { data } = await login(this.user)
        console.log(data)
        // 设置登录成功提示
        this.$toast.success('登录成功')
      } catch (err) {
        // 条件判断 设置登录失败提示
        if (err.response && err.response.status === 400) {
          this.$toast.fail('登录失败，手机号或验证码错误')
        }
      }
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
