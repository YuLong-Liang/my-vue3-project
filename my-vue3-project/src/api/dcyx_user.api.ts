import request from '@/utils/request'

const USER_BASE_URL = '/api/v1/user'

export const DCYX_USER_API = {
  /** 登录接口*/
  login(data: any) {
    return request<any, any>({
      url: `${USER_BASE_URL}/student/studentH5Login`,
      method: 'post',
      data: data,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  },
  /** user/student/me */
  getStudentInfo() {
    return request<any, any>({
      url: `${USER_BASE_URL}/student/me`,
      method: 'get',
    })
  },

  /** 获取学生信息 */
  getStudentById(userid: string) {
    return request<any, any>({
      url: `${USER_BASE_URL}/student/getStudentById/${userid}`,
      method: 'get',
    })
  },
}

export interface StudentSysLeftInfo {
  id: string
  username: string
  name: string
  gender: string | null
  mobile: string
  schoolName: string | null
  grade: string | null
  wechatId: string | null
  qq: string | null
  lastScore: string
  expireTime: string
  loginTime: string
  email: string | null
  grades: string
  extend: string
  studentType: string
  firstLoginTime: string
  teacherName: string
  teacherMobile: string
  className: string
}
