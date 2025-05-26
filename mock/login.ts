// mock/index.ts
// 系统主页用到的API
import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/api/login/getKey',
    method: 'post',
    response: () => {
      return {
        code: '200',
        message: '',
        data: {
          jId: 'B8BE02250FD3AE8FB49F9FA323E87F31',
          data: 'iVBORw0KGgoAAAANSUhEUgAAAFoAAAAoCAIAAADxIHqfAAABvUlEQVR42u2azQ1CIQyAuXtxC9dwDY/enULPruI4rqMmLyGE/lCghaISTjzsa79X2gKG8G9Ze+k1dYF2DZofjLRXEauimOSTxwnB9GP2Cx/sa2o4GCELQWnEcT6cqI7O39+OVKde8bw8YEdn7u7XrDez08eRQomSa3GgLLaeagtBpH0ODn5wE170BYoFOhh1jmZHEzqJaOL4yKHG5TiYpZE9+ohNDUaJzMTBjAtxFMMEM2FJHHzU+GkcEEo/Dkexg0m3m9looqGsRbWqTbq+Ei3TUCJo+pDjcJFoa0HIccBil8HhqO5okFDEEcWmGlI4+kEgOORo2nCk04TRNNXNmgXuHRIoEAfzq9TgrEgtptthflFYLDwUyjvQIyUmyzbsWfh4YZtZqKe1i6VqL8sQyfQZjcPoTKE2+sLzO+/HP9anfjDAfRUOn8fLYZZmPonMxGHn8+vhUCFidEk0EwdKpDbvaN2fhblrmCLSexTeZJTJpWRz+lRMpXDvN9o7er6nhM4YfTS9Q/dednkcuvXilBtvk9jhhIgXHC83f2iYFkpN3eRLcCxHZETd4ae0cVSVLkHEEIef3Wo1jn+L7Q246pgYnzRHLgAAAABJRU5ErkJggg==',
          key: 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA1YxU5K/KqL/+A2PxCR/HTaJBpt7RLoWH4uhnKAZnOqdKOUbtMfJXVGLI9zD3iYgPxIIZjWhIuejWYoe57wfpugw7UWdHvPasKNpmhIAal/NQ+5Ymzzpxkx67ScyeHXmD+yheWRhzc3QoDb7HQO7LTk0faLRqJIHBkmfe4Hc2PnVrk8h+Tbck++psvf6ynZ2BgX16lM7AEHtE4m1kBMdOTATF+o0xcoLg7b3/wMYyMnJW9opjLsjRHnHBYFw4JRL0ShrOjpPp8zzAnHBURF0IT+sqkliy44BGmBde/KeUfUSVWtwX4aweRzyEwJ6NalIy5LU32xmoHYe4z3Fch53RMwIDAQAB',
        },
        success: true,
        fail: false,
      }
    },
  },
] as MockMethod[]
