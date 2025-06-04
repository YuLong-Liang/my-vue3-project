<template>
  <div class="left-board">
    <el-card class="left-card" shadow="hover">
      <!-- 用户信息区域 -->
      <div class="user-info">
        <div class="avatar-area">
          <el-avatar :size="56" :src="user.avatar" />
        </div>
        <div class="user-meta">
          <div class="user-name">{{ user.name }}</div>
          <div class="user-id">ID: {{ user.id }}</div>
          <div class="user-expiry">有效期: {{ user.expireTime }}</div>
        </div>
      </div>
      <!-- 智能复习按钮 -->
      <el-button class="smart-review-btn" type="primary" @click="onSmartReview"
        >智能复习</el-button
      >
      <!-- 四个按钮区域 -->
      <div class="action-btns">
        <el-button type="success" @click="onDailyTask">每日任务</el-button>
        <el-button type="warning" @click="onTestCenter">测试中心</el-button>
        <el-button type="info" @click="onProfile">我的</el-button>
      </div>
      <!-- 今日报告区域 -->
      <div class="today-report">
        <div class="report-title">今日报告</div>
        <div class="report-item">
          在线时长: <span>{{ report.time1 }}</span>
        </div>
        <div class="report-item">
          有效时长: <span>{{ report.time2 }}</span>
        </div>
        <div class="report-item">
          今日效率: <span>{{ report.efficiency }}</span>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'DcyxSysLeftBoard',
  inheritAttrs: false,
})

import { defineEmits, computed } from 'vue'
import { useDcyxUserStore } from '@/store/modules/dcyx_user.store'
import { useDcyxStudyStore } from '@/store/modules/dcyx_study.store'

const dcyxUserStore = useDcyxUserStore()
const dcyxStudyStore = useDcyxStudyStore()

const user = computed(() => dcyxUserStore.student)
const report = computed(() => dcyxStudyStore.todayReport)

const emits = defineEmits<{
  (_e: 'smart-review'): void
  (_e: 'daily-task'): void
  (_e: 'test-center'): void
  (_e: 'profile'): void
}>()

function onSmartReview() {
  emits('smart-review')
}
function onDailyTask() {
  emits('daily-task')
}
function onTestCenter() {
  emits('test-center')
}
function onProfile() {
  emits('profile')
}
</script>

<style scoped lang="scss">
.left-board {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  // background: linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%);
}
.left-card {
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
  color: #333;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 20px 16px;
  gap: 16px;
}
.user-info {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}
.avatar-area {
  margin-right: 12px;
}
.user-meta {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.user-name {
  font-size: 16px;
  font-weight: bold;
  color: #2d3a4b;
}
.user-id,
.user-expiry {
  font-size: 12px;
  color: #5c6b7a;
}
.smart-review-btn {
  width: 100%;
  margin-bottom: 12px;
  font-size: 14px;
  font-weight: 500;
  background: linear-gradient(90deg, #43e97b 0%, #38f9d7 100%);
  border: none;
  padding: 8px 16px;
}
.action-btns {
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  gap: 8px;
}
.action-btns .el-button {
  flex: 1;
  font-size: 13px;
  padding: 6px 12px;
}
.today-report {
  background: rgba(255, 255, 255, 0.7);
  border-radius: 8px;
  padding: 12px;
  margin-top: auto;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
}
.report-title {
  font-size: 14px;
  font-weight: bold;
  color: #f57c00;
  margin-bottom: 8px;
}
.report-item {
  font-size: 13px;
  color: #2d3a4b;
  margin-bottom: 4px;
  span {
    font-weight: bold;
    color: #1976d2;
  }
}
</style>
