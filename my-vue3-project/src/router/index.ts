import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/user'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/pages/Login.vue'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/Home.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/memory',
      name: 'Memory',
      component: () => import('@/pages/Memory.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/test',
      name: 'Test',
      component: () => import('@/pages/Test.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('@/pages/Profile.vue'),
      meta: {
        requiresAuth: true
      }
    }
  ]
})

// 路由守卫
router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !userStore.checkAuth()) {
    next('/login')
  } else if (to.path === '/login' && userStore.checkAuth()) {
    next('/')
  } else {
    next()
  }
})

export default router 