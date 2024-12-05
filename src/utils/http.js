// axios的基础封装
//router useRouter() 的使用需要特别注意，因为它只能在 Vue 组件的 setup 函数中正确初始化
import axios from "axios";
import { ElMessage } from "element-plus";
import 'element-plus/theme-chalk/el-message.css';
import {useUserStore} from '@/stores/user'
import router from '@/router';

const HttpInstance =  axios.create({
  baseURL:'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout:5000
})
// axios请求拦截器
HttpInstance.interceptors.request.use(config => {
  //从pinia中拿到token
  const userStore = useUserStore()
  const token =  userStore.userInfo.token
  //按照后端要求拼接token
  if(token){
    config.headers.Authorization = `Bearer ${token}`
    // console.log(token);

  }
  return config
}, e => Promise.reject(e))

// axios响应式拦截器
HttpInstance.interceptors.response.use(res => res.data, e => {
  //统一错误提示,提示的信息在返回的errormessage中获取即可
  ElMessage({typ:'warning',message:e.response.data.message})

  //401token失效处理
  //1 清除本地用户数据
  //2 跳转到登陆页
  if(e.response.status === 401){
    // console.log(e.response.status)
    const userStore = useUserStore()
    userStore.clearUserInfo()
    router.push('/login')
  }

  return Promise.reject(e)
})
export default HttpInstance
