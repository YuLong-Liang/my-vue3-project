import type { App } from 'vue'
import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from 'vue-router'

export const Layout = () => import('@/layout/index.vue')
export const DcyxLayout = () => import('@/layout-dcyx/index.vue')

// 静态路由
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/redirect',
    component: Layout,
    meta: { hidden: true },
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index.vue'),
      },
    ],
  },

  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: { hidden: true },
  },

  {
    path: '/',
    name: '/',
    component: null,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dcyx/sys-main/index.vue'),
        // 用于 keep-alive 功能，需要与 SFC 中自动推导或显式声明的组件名称一致
        // 参考文档: https://cn.vuejs.org/guide/built-ins/keep-alive.html#include-exclude
        name: 'Dashboard',
        meta: {
          title: 'dashboard',
          icon: 'homepage',
          affix: true,
          keepAlive: true,
        },
      },
      {
        path: '401',
        component: () => import('@/views/error/401.vue'),
        meta: { hidden: true },
      },
      {
        path: '404',
        component: () => import('@/views/error/404.vue'),
        meta: { hidden: true },
      },
      {
        path: 'profile',
        name: 'Profile',
        component: () => import('@/views/profile/index.vue'),
        meta: { title: '个人中心', icon: 'user', hidden: true },
      },
      {
        path: 'my-notice',
        name: 'MyNotice',
        component: () =>
          import('@/views/system/notice/components/MyNotice.vue'),
        meta: { title: '我的通知', icon: 'user', hidden: true },
      },
    ],
  },

  {
    path: '/work',
    component: DcyxLayout,
    redirect: '/work/word-training',
    children: [
      {
        path: 'word-training',
        name: 'WordTraining',
        component: () => import('@/views/dcyx/work-main/word-training.vue'),
        meta: {
          title: '单词训练',
          keepAlive: true,
        },
      },
      {
        path: 'memory-tracking',
        name: 'MemoryTracking',
        component: () => import('@/views/dcyx/work-main/memory-tracking.vue'),
        meta: {
          title: '记忆追踪',
          keepAlive: true,
        },
      },
      {
        path: 'test-center',
        name: 'TestCenter',
        component: () => import('@/views/dcyx/work-main/test-center.vue'),
        meta: {
          title: '测试中心',
          keepAlive: true,
        },
      },
      {
        path: 'word-book',
        name: 'WordBook',
        component: () => import('@/views/dcyx/work-main/word-book.vue'),
        meta: {
          title: '单词本',
          keepAlive: true,
        },
      },
      {
        path: 'my-profile',
        name: 'MyProfile',
        component: () => import('@/views/dcyx/work-main/my-profile.vue'),
        meta: {
          title: '我的',
          keepAlive: true,
        },
      },
    ],
  },

  {
    path: '/dcyx',
    redirect: '/dcyx/inteli-memory',
    children: [
      {
        path: 'inteli-memory',
        name: 'InteliMemory',
        component: () => import('@/views/dcyx/learn-main/inteli-memory.vue'),
        meta: {
          title: '智能记忆',
        },
      },
      {
        path: 'inteli-dictation',
        name: 'InteliDictation',
        component: () => import('@/views/dcyx/learn-main/inteli-dictation.vue'),
        meta: {
          title: '智能听写',
        },
      },
      {
        path: 'inteli-writing',
        name: 'InteliWriting',
        component: () => import('@/views/dcyx/learn-main/inteli-writing.vue'),
        meta: {
          title: '智能默写',
        },
      },
    ],
  },
]

/**
 * 创建路由
 */
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
  // 刷新时，滚动条位置还原
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

// 全局注册 router
export function setupRouter(app: App<Element>) {
  app.use(router)
}

export default router
