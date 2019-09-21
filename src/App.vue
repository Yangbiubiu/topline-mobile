<template>
  <div id='app'>
    <router-view/>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
//  做个请求测试
// import request from '@/utils/request'

// request({
//   method: 'GET',
//   url: '/app/v1_1/articles',
//   params: {
//     channel_id: 0, // 频道id
//     timestamp: Date.now(), // 时间戳，请求新的推荐数据传当前的时间戳，请求历史推荐传指定的时间戳
//     with_top: 1// 是否包含置顶，进入页面第一次请求时要包含置顶文章，1-包含置顶，0-不包含
//   }
// }).then(res => {
//   console.log(res.data)
// })
export default {
  name: 'App' // 原则上组件都要有名字
}
</script>

<style>

</style>
