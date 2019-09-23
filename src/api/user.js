/**
 * 用户相关请求模块
 * 两个好处：
 *  便于开发和维护
 *  便于重用
 * 一个原则：
 *  仅封装请求操作，不关心任何其它业务逻辑，例如操作视图，修改DOM等，更不关心交互
 *  这样做了以后，就不要再在组件中出现任何直接请求了，建议全部都这样搞
   例如：export const 自定义模块名= ()=> {
   return request({
        xxx(一堆代码)
   })
 }
 */
import request from '@/utils/request'

/* 参数的解构赋值
方式1 function fn(data) {
    console.log(data); // { a: 1, b: 2 }
    }
fn({ a: 1, b: 2 });

// data参数也可以解构赋值
例:方式2 function fn ({a , b}) {
    相当于：a=参数.a  b=参数.b
    或 const{ a , b } =你传的参数（例如传入data）
  console.log(a,b); // 1 2
}
fn({ a: 1, b: 2 });
*/

// export const login = data => {
export const login = ({
  mobile,
  code
}) => {
// 方式1 const mobile = data.mobile  const code = data.code
// 方式2 const { mobile, code } = data
  return request({ // 对象给对象赋值
    method: 'POST',
    url: '/app/v1_0/authorizations',
    data: {
      mobile,
      code
    }
  })
}
