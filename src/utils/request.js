import axios from 'axios'
import NProgress from 'nprogress'

const request = axios.create({
  timeout: 10000
})

// 添加请求拦截器
request.interceptors.request.use(function (config) {
  NProgress.start()
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
request.interceptors.response.use(function (response) {
  NProgress.done()
  return response.data
}, function (error) {
  NProgress.done();
  return new Promise(() => {})
  // return Promise.reject(error);
});

export default request