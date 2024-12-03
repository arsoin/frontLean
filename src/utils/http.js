// axios的基础封装
import axios from "axios";

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
  return Promise.reject(e)
})
export default HttpInstance
