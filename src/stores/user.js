import { defineStore } from 'pinia'
import { ref } from 'vue'
import {LoginAPI} from '@/apis/user'

export const useUserStore =  defineStore('user',()=>{
  //定义管理用户数据的state
  const userInfo = ref({})

  //定义获取接口数据的action函数
  const getUserInfo = async({account,password})=>{
    //获取用户数据
    const res = await LoginAPI({account,password})
    userInfo.value= res.result
  }
  //退出登陆的action函数
  const clearUserInfo = ()=>{
    userInfo.value = {}
  }


  //以对象的格式吧 这两个给return 出去，这样就能用了
  return{
    userInfo,
    getUserInfo,
    clearUserInfo,
  }
},{
  persist: true,
})
