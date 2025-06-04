<template>
  <div class="home-container">
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

import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage, ElMessageBox } from 'element-plus'
import DcyxNavBar from '@/components/DcyxNavBar/index.vue'
import DcyxSysLeftBoard from '@/components/DcyxSysLeftBoard/index.vue'
import DcyxSysRightBoard from '@/components/DcyxSysRightBoard/index.vue'
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
    lockScroll: false,
  }).then(() => {
    userStore.logout().then(() => {
      router.push('/login')
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

<style lang="scss" scoped>
.home-container {
  padding: 0;
  height: 100%;
  width: 100%;
  // min-height: 100%;
  background: linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%);
  font-family: 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif;
  color: #2d3a4b;
}
.dashboard-header {
  width: 100%;
  background: linear-gradient(90deg, #1976d2 0%, #42a5f5 100%);
  box-shadow: 0 2px 8px rgba(25, 118, 210, 0.08);
  border-radius: 0 0 18px 18px;
  margin-bottom: 0;
}
// 背景设置为渐变色、浅浅蓝色、浅灰色
.dashboard-main {
  display: flex;
  flex-direction: row;
  height: calc(100vh - 100px);
  background: linear-gradient(90deg, #cee1f4 0%, #8393a0 100%) !important;
}
.dashboard-left {
  // width: 340px;
  min-width: 320px;
  max-width: 380px;
  background: none;
}
.dashboard-right {
  flex: 1;
  background: none;
}
.dashboard-content {
  flex: 1;
  padding-left: 32px;
}
.top-bar {
  border-radius: 8px;
}
.course-section {
  margin-bottom: 24px;
}
.quick-entry {
  justify-content: flex-start;
}
// 统一字体和按钮风格
:deep(.el-card),
:deep(.el-button),
:deep(.el-avatar),
:deep(.el-progress),
:deep(.el-dialog),
:deep(.el-select),
:deep(.el-option) {
  font-family: 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif !important;
  color: #2d3a4b !important;
}
:deep(.el-card) {
  background: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%) !important;
  border-radius: 18px !important;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08) !important;
}
:deep(.el-button) {
  border-radius: 8px !important;
  font-size: 16px !important;
  font-weight: 500 !important;
}
:deep(.el-dialog__title) {
  color: #1976d2 !important;
  font-size: 20px !important;
  font-weight: bold !important;
}
:deep(.el-select),
:deep(.el-option) {
  font-size: 16px !important;
}
// 标题统一
h1,
h2,
h3,
h4,
h5,
h6,
.course-title,
.vocab-title,
.user-name,
.report-title {
  color: #1976d2 !important;
  font-weight: bold !important;
}
// 主要内容字体
body,
.dashboard-main,
.dashboard-content,
.task-stats,
.vocab-info,
.user-id,
.user-expiry,
.report-item {
  color: #2d3a4b !important;
  font-size: 16px !important;
}
// 细节色彩
.task-stats,
.report-title {
  color: #f57c00 !important;
}
.vocab-title {
  color: #43e97b !important;
}
// 统一边距
.dashboard-main,
.dashboard-left,
.dashboard-right {
  box-sizing: border-box;
}
</style>
