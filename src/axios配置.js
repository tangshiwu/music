//axios的配置文件
import axios from 'axios'
let instance = axios.create({
  //共用的地址
  baseURL:'/api',
  //超时
  timeout:1000
})
export default instance
