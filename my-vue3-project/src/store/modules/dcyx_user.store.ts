// import { defineStore } from 'pinia'
import { DCYX_USER_API, type StudentSysLeftInfo } from '@/api/dcyx_user.api'
import { store } from '@/store'

export const useDcyxUserStore = defineStore('dcyx_user', () => {
  const student = useStorage<StudentSysLeftInfo>(
    'student',
    {} as StudentSysLeftInfo,
  )

  const getStudentInfo = async () => {
    return new Promise((resolve, reject) => {
      DCYX_USER_API.getStudentInfo()
        .then((res) => {
          Object.assign(student.value, { ...res })
          resolve(res)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  const fetchStudent = async (userid: string) => {
    return new Promise((resolve, reject) => {
      DCYX_USER_API.getStudentById(userid)
        .then((res) => {
          student.value = res
          resolve(res)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  return {
    student,
    getStudentInfo,
    fetchStudent,
  }
})

export function useDcyxUserStoreHook() {
  return useDcyxUserStore(store)
}
