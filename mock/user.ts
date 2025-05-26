// mock/user.ts
import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/api/user',
    method: 'get',
    response: () => {
      return {
        code: 0,
        data: { name: '张三', age: 18 },
      }
    },
  },
  {
    url: '/api/user/student/studentH5Login',
    method: 'post',
    response: ({ body }) => {
      console.log(body)
      const { key } = body
      const body1 = body['body']

      return {
        code: '200',
        message: '登录成功',
        data: {
          enterpriseId: '1',
          orgId: '5546563255632171154',
          userId: '102474',
          username: 'ty102474',
          orgName: '河南分校3',
          orgCode: 'hn3',
          loginTime: '1747917999000',
          firstLoginTime: '1747565980000',
          fullname: '李岩',
          expireTime: '2025-05-27',
          roleProperties: null,
          useScope: '0',
          treeId: '0001p657',
          gender: null,
          status: '1',
        },
        success: true,
        fail: false,
      }
    },
  },
  {
    url: '/api/user/dbUser/logOut',
    method: 'post',
    response: ({ headers }) => {
      console.log(headers['authorization'])
      return {
        code: '200',
        message: '操作成功',
        data: null,
        success: true,
        fail: false,
      }
    },
  },
  {
    url: '/api/h5/user/student/getStudentById/:userid',
    method: 'get',
    response: ({ params }) => {
      console.log(params)
      const { userid } = params

      return {
        code: '200',
        message: null,
        data: {
          id: '102474',
          username: 'ty102474',
          name: '李岩',
          gender: null,
          mobile: '13298217835',
          schoolName: null,
          grade: null,
          wechatId: null,
          qq: null,
          lastScore: '0',
          expireTime: '2025-05-27 18:59:58',
          loginTime: '2025-05-24 11:32:47',
          email: null,
          grades: '[30,40,50,60,70,251]',
          extend:
            '{"ZNJY_TESTING_CONDIG":3000,"JYDYCG_TESTING_CONDIG":3000,"MXDYCG_TESTING_CONDIG":5000,"TXDYCG_TESTING_CONDIG":5000,"SPELL_TYPE":2}',
          studentType: '2',
          firstLoginTime: '2025-05-18 18:59:40',
          teacherName: '智慧教员',
          teacherMobile: '19703746665',
          className: '默认班级',
        },
        success: true,
        fail: false,
      }
    },
  },
  {
    url: '/api/user/student/getStudyConfig',
    method: 'get',
    response: ({ headers }) => {
      console.log(headers)

      return {
        code: '200',
        message: null,
        data: {
          ZNJY_TESTING_CONDIG: '3000',
          JYDYCG_TESTING_CONDIG: '3000',
          MXDYCG_TESTING_CONDIG: '5000',
          TXDYCG_TESTING_CONDIG: '5000',
          SPELL_TYPE: '2',
        },
        success: true,
        fail: false,
      }
    },
  },
] as MockMethod[]
