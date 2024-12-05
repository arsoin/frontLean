//封装所有和用户相关的函数

import HttpInstance from "@/utils/http";

//这里是解构赋值的方式传进来参数
export const LoginAPI = ({account,password})=>{
  return HttpInstance({
    method:'POST',
    url:'/login',
    data:{
      account,
      password,
    }
  })
}
