<template>
  <div class="login">
    <!-- 导航栏 -->
    <van-nav-bar title="登录" />
    <!-- /导航栏 -->

<!-- ValidationProvider 是验证插件提供的一个全局组件
      rules="secret" 配置验证规则
      v-slot="{ errors }" 获取验证相关的结果参数
      errors[0] 用来获取验证失败的错误消息-->

<!-- <ValidationProvider rules="required|email" name="手机号" v-slot="{ errors }">
        <input v-model="user.mobile" type="text">
        <span>{{ errors[0] }}</span>
     </ValidationProvider> -->
  <!-- 登录表单 -->
  <!-- ValidationObserver 组件会渲染成一个 form 表单
      可以通过 ref 调用这个组件的方法：validate 来进行 js 验证-->
  <ValidationObserver tag="form" ref="loginForm">
  <!-- 把需要验证的字段使用 ValidationProvider 包裹起来
    在其上面配置对应的验证规则等信息 phone为自定义一个验证规则 -->    <ValidationProvider tag="div" name="手机号" rules="required|phone" v-slot="{ errors }">
      <!-- 要验证的表单字段手机号 -->
        <van-field
          v-model="user.mobile"
          required
          clearable
          label="手机号"
          placeholder="请输入手机号"
          :error-message="errors[0]"
        />
      </ValidationProvider>
      <ValidationProvider tag="div" name="验证码" rules="required" v-slot="{ errors }">
        <!-- 要验证的表单字段验证码 -->
        <van-field
          v-model="user.code"
          type="password"
          label="验证码"
          placeholder="请输入验证码"
          required
          :error-message="errors[0]"
        />
      </ValidationProvider>
    </ValidationObserver>
    <!-- 登录表单/ -->
    <!-- 登录按钮 -->
    <div class="login-wrap">
      <!-- 给登录按钮注册点击事件onLogin -->
      <van-button type="info" :loading="isLoginLoading" @click="onLogin">登录</van-button>
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
      },
      // 默认没有转圈圈样式
      isLoginLoading: false // 控制登录按钮的 loading 状态(为了不让用户频繁点击登录按钮)
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
      this.isLoginLoading = true // 当提交登录的时候，设置 loading(开始有转圈圈样式）
      try {
        // 表单验证
        const isValid = await this.$refs.loginForm.validate()
        // 验证失败，则什么都不做
        if (!isValid) {
          return
        }
        // 验证通过，提交表单
        this.isLoginLoading = true
        // const { data } = await login(this.user)
        // console.log(data)
        const res = await login(this.user)
        this.$store.commit('setUser', res.data.data)
        // 设置登录成功提示
        this.$toast.success('登录成功')
      } catch (err) {
        // 条件判断 设置登录失败提示
        if (err.response && err.response.status === 400) {
          this.$toast.fail('登录失败，手机号或验证码错误')
        }
      }
      // 无论登录成功与否，都停止 loading(停止有转圈圈样式)
      this.isLoginLoading = false
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  .login-wrap {
    padding: 20px;
    .van-button {
      width: 100%;
    }
  }
}
</style>
