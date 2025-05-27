import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

interface LoginForm {
  username: string
  password: string
}

interface UserInfo {
  id: string
  username: string
  avatar?: string
  onlineTime?: number
}

export const useUserStore = defineStore('user', () => {
  const token = ref<string>('')
  const userInfo = ref<UserInfo | null>(null)

  const login = async (loginForm: LoginForm) => {
    try {
      const response = await axios.post('/api/user/student/studentH5Login', loginForm)
      const { token: newToken, userInfo: newUserInfo } = response.data
      
      token.value = newToken
      userInfo.value = newUserInfo
      
      // 存储token到localStorage
      localStorage.setItem('token', newToken)
      
      return true
    } catch (error) {
      console.error('登录失败:', error)
      return false
    }
  }

  const logout = () => {
    token.value = ''
    userInfo.value = null
    localStorage.removeItem('token')
  }

  const checkAuth = () => {
    const storedToken = localStorage.getItem('token')
    if (storedToken) {
      token.value = storedToken
      return true
    }
    return false
  }

  return {
    token,
    userInfo,
    login,
    logout,
    checkAuth
  }
}) 