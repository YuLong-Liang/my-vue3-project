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
      width="80%"
      :fullscreen="false"
      :show-close="true"
      :close-on-click-modal="false"
      :close-on-press-escape="true"
      class="study-module-dialog"
      @close="dialogVisible = false"
    >
      <dcyx-select-study-module />
    </el-dialog>
  </nav>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue'
import DcyxSelectStudyModule from '@/views/dcyx/sys-main/compoments/DcyxSelectStudyModule/index.vue'
import { useDcyxSeriesStore } from '@/store'
import type { TabItem } from '@/api/dcyx_series.api'

defineOptions({
  name: 'DcyxNavBar',
  inheritAttrs: false,
})

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
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(90deg, #1976d2 0%, #42a5f5 100%);
  color: #fff;
  padding: 0 24px;
  box-sizing: border-box;
  position: relative;
  z-index: 10;
}
.navbar-left {
  display: flex;
  align-items: center;
  .logo {
    width: 36px;
    height: 36px;
    margin-right: 8px;
  }
  .logo-text {
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 1px;
  }
}
.navbar-center {
  display: flex;
  gap: 20px;
  .nav-item {
    font-size: 1rem;
    cursor: pointer;
    padding: 6px 14px;
    border-radius: 6px;
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
    font-size: 0.95rem;
    cursor: pointer;
    padding: 6px 14px;
    border-radius: 6px;
    transition: background 0.2s;
    &:hover {
      background: rgba(255, 255, 255, 0.18);
    }
  }
}

:deep(.study-module-dialog) {
  .el-dialog__header {
    margin: 0;
    padding: 12px 20px;
    border-bottom: 1px solid #e0e7ef;
  }

  .el-dialog__body {
    padding: 0;
  }

  .el-dialog__title {
    font-size: 16px;
    font-weight: 600;
  }
}
</style>
