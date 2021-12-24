import axios from 'axios'

export default function request (config) {
  const instance = axios.create({
    baseURL: '/api',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })

  // 请求拦截
  instance.interceptors.request.use(

  )

  // 响应拦截
  instance.interceptors.response.use(
    response => {
      if (response.status === 200) {
        return response.data
      }
    },
    error => {
      console.log(error)
    }
  )

  return instance(config)
}
