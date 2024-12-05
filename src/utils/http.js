// axios的基础封装
import axios from "axios";
import { ElMessage } from "element-plus";
import 'element-plus/theme-chalk/el-message.css';


const HttpInstance =  axios.create({
  baseURL:'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout:5000
})
// axios请求拦截器
HttpInstance.interceptors.request.use(config => {
  return config
}, e => Promise.reject(e))

// axios响应式拦截器
HttpInstance.interceptors.response.use(res => res.data, e => {
  //统一错误提示,提示的信息在返回的errormessage中获取即可
  ElMessage({typ:'warning',message:e.response.data.message})
  return Promise.reject(e)
})
export default HttpInstance
