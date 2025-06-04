<template>
  <nav class="dcyx-navbar">
    <div class="navbar-left">
      <img class="logo" src="@/assets/logo.png" alt="LOGO" />
      <span class="logo-text">单词易记</span>
    </div>
    <div class="navbar-center">
      <div
        v-for="item in navItems"
        :key="item.key"
        :class="['nav-item', { active: item.key === selectedKey }]"
        @click="onNavClick(item)"
      >
        {{ item.label }}
      </div>
    </div>
    <div class="navbar-right">
      <span class="logout" @click="onLogout">退出</span>
    </div>
    <el-dialog
      v-model="dialogVisible"
      title="选择学习模块"
      width="100%"
      @close="dialogVisible = false"
    >
      <dcyx-select-study-module />
    </el-dialog>
  </nav>
</template>

<script setup lang="ts">
defineOptions({
  name: 'DcyxNavBar',
  inheritAttrs: false,
})

import { ref, defineEmits } from 'vue'
import DcyxSelectStudyModule from '@/components/DcyxSelectStudyModule/index.vue'
import { useDcyxSeriesStore } from '@/store'
import type { TabItem } from '@/api/dcyx_series.api'
const dcyxSeriesStore = useDcyxSeriesStore()

interface NavItem {
  key: string
  label: string
}

const navItems = ref<NavItem[]>([])

const emits = defineEmits<{
  (_: 'logout'): void
  (_: 'nav-select', _key: string): void
  (_: 'semester-change', _value: string): void
}>()

const selectedKey = ref('primary')
const dialogVisible = ref(false)

function onNavClick(item: NavItem) {
  // 点击顶部栏，弹出选择学习模块的弹窗
  selectedKey.value = item.key
  dialogVisible.value = true
}

function onLogout() {
  emits('logout')
}

const initNavBar = () => {
  // 01 初始化当前组件的内容
  // 01.01 获取顶部栏列表
  dcyxSeriesStore
    .getSeriesByUser()
    .then((res) => {
      // res 类型为 TabItem[]
      navItems.value = res.map((item: TabItem) => {
        return {
          key: item.id,
          label: item.nameZhCn,
        }
      })
    })
    .catch((error) => {
      console.error(error)
    })
}

onMounted(() => {
  initNavBar()
})
</script>

<style scoped lang="scss">
.dcyx-navbar {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(90deg, #1976d2 0%, #42a5f5 100%);
  color: #fff;
  padding: 0 40px;
  box-sizing: border-box;
  position: relative;
  z-index: 10;
}
.navbar-left {
  display: flex;
  align-items: center;
  .logo {
    width: 48px;
    height: 48px;
    margin-right: 12px;
  }
  .logo-text {
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 2px;
  }
}
.navbar-center {
  display: flex;
  gap: 32px;
  .nav-item {
    font-size: 1.2rem;
    cursor: pointer;
    padding: 8px 18px;
    border-radius: 8px;
    transition: background 0.2s;
    &.active {
      background: rgba(255, 255, 255, 0.18);
      font-weight: bold;
    }
    &:hover {
      background: rgba(255, 255, 255, 0.12);
    }
  }
}
.navbar-right {
  .logout {
    font-size: 1.1rem;
    cursor: pointer;
    padding: 8px 18px;
    border-radius: 8px;
    transition: background 0.2s;
    &:hover {
      background: rgba(255, 255, 255, 0.18);
    }
  }
}
</style>
