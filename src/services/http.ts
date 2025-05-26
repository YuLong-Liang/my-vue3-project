import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

// 创建 axios 实例
const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
})

// 请求拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // 在这里可以添加token等认证信息
    const token = localStorage.getItem('token')
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`
      }
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const { data } = response
    // 这里可以根据后端的响应结构做相应的处理
    if (data.code === 200) {
      return data.data
    }
    // 处理其他状态码
    return Promise.reject(new Error(data.message || 'Error'))
  },
  (error) => {
    // 处理 HTTP 错误状态码
    const { response } = error
    if (response && response.status) {
      switch (response.status) {
        case 401:
          // 未授权处理
          break
        case 403:
          // 权限不足处理
          break
        case 404:
          // 资源不存在处理
          break
        default:
          // 其他错误处理
          break
      }
    }
    return Promise.reject(error)
  }
)

export default service 