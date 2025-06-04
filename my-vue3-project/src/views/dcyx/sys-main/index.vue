<template>
  <div class="dashboard-container">
    <div class="dashboard-header">
      <!-- 顶部栏 NAVBAR -->
      <dcyx-nav-bar
        @logout="logout"
        @nav-select="onNavSelect"
        @semester-change="onSemesterChange"
      />
    </div>

    <div class="dashboard-main">
      <div class="dashboard-left">
        <!-- 左侧功能模块 -->
        <dcyx-sys-left-board
          :user="studentInfo"
          :report="todayReport"
          @smart-review="onSmartReview"
          @daily-task="onDailyTask"
          @test-center="onTestCenter"
          @profile="onProfile"
        />
      </div>
      <div class="dashboard-right">
        <dcyx-sys-right-board
          :course-name="currentProgram?.seriesName || '暂无课程'"
          :progress-percent="progressPercent"
          :task-count="currentProgram?.programStudyWordNumber || 0"
          :memory-duration="todayReport?.time1 || '00:00'"
          :vocab-count="currentProgram?.programWordNumber || 0"
          :speed="todayReport?.seconds || 0"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'Dashboard',
  inheritAttrs: false,
})

import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage, ElMessageBox } from 'element-plus'
import DcyxNavBar from './compoments/DcyxNavBar/index.vue'
import DcyxSysLeftBoard from './compoments/DcyxSysLeftBoard/index.vue'
import DcyxSysRightBoard from './compoments/DcyxSysRightBoard/index.vue'
import { useDcyxSeriesStore } from '@/store'
import { useDcyxUserStore } from '@/store'
import { useDcyxStudyStore } from '@/store'
import { useDcyxProgramStore } from '@/store'
import { useUserStore } from '@/store'

const router = useRouter()
const userStore = useUserStore()
const dcyxSeriesStore = useDcyxSeriesStore()
const dcyxStudyStore = useDcyxStudyStore()
const dcyxProgramStore = useDcyxProgramStore()
const dcyxUserStore = useDcyxUserStore()
const studentInfo = computed(() => dcyxUserStore.student)
const todayReport = computed(() => dcyxStudyStore.todayReport)
const currentProgram = computed(() => dcyxStudyStore.currentProgram)
const progressPercent = computed(() => {
  const total = Number(currentProgram.value?.programWordNumber || 0)
  const learned = Number(currentProgram.value?.programStudyWordNumber || 0)
  if (!total) return 0
  return Number(((learned / total) * 100).toFixed(2))
})

// const logout = () => {
//   // 发送退出逻辑
//   ElMessage.success('已退出登录')
//   router.push('/dashboard')
// }

/**
 * 退出登录
 */
function logout() {
  ElMessageBox.confirm('确定注销并退出系统吗？', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
    // lockScroll: false,
  })
    .then(() => {
      userStore.logout().then(() => {
        ElMessage({
          type: 'success',
          message: '已退出登录',
        })
        router.push('/login')
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '取消登出',
      })
    })
}

function onNavSelect(_key: string) {}
function onSemesterChange(_value: string) {}
function onSmartReview() {
  ElMessage.success('点击了智能复习')
}
function onDailyTask() {
  ElMessage.info('点击了每日任务')
}
function onTestCenter() {
  ElMessage.info('点击了测试中心')
}
function onProfile() {
  ElMessage.info('点击了我的')
}

const initDashboard = () => {
  dcyxSeriesStore.getSeriesByUser()
  dcyxUserStore.fetchStudent('102474')
  dcyxStudyStore.fetchTodayReport()
  dcyxStudyStore.fetchCurrentProgram()
  dcyxProgramStore.getCurrentProgram()
}

onMounted(() => {
  try {
    initDashboard()
  } catch (error) {
    console.error('初始化失败', error)
  }
})
</script>

<style lang="scss">
@import '@/styles/dashboard.scss';

// Component-specific styles only
:deep(.el-card) {
  @extend .dashboard-card;
}

:deep(.el-button) {
  border-radius: 6px !important;
  font-size: 14px !important;
  font-weight: 500 !important;
  padding: 8px 16px !important;
}

// Title styles h1,
h2,
h3,
h4,
h5,
h6 {
  @extend .dashboard-title;
}

// Content text styles
.dashboard-main,
.dashboard-content {
  @extend .dashboard-text;
}

// Highlight styles
.task-stats,
.report-title {
  @extend .dashboard-highlight;
}

.vocab-title {
  @extend .dashboard-success;
}
</style>
