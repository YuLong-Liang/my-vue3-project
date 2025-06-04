<template>
  <div class="right-board">
    <el-card class="right-card" shadow="hover">
      <!-- 在学课程 -->
      <div class="course-title">在学课程</div>
      <!-- 学习进度区域 -->
      <div class="progress-section" @click="onEnterProgram">
        <div class="course-title">{{ courseName }}</div>
        <el-progress
          :text-inside="true"
          :percentage="progressPercent"
          :stroke-width="18"
          status="success"
        />

        <div class="progress-info">
          <span>已学{{ learnedWordCount }}个，</span>
          <span>共{{ totalWordCount }}个</span>
        </div>
      </div>

      <div class="task-section">
        <div class="task-title">任务课程（{{ taskCount }}）</div>
      </div>

      <!-- 今日词汇统计 -->
      <div class="vocab-section">
        <div class="vocab-title">今日词汇统计</div>
        <div class="vocab-info">
          <div>
            记忆时长: <span>{{ memoryDuration }}</span>
          </div>
          <div>
            数量: <span>{{ vocabCount }}</span>
          </div>
          <div>
            速度: <span>{{ speed }}</span> 个/小时
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'DcyxSysRightBoard',
  inheritAttrs: false,
})

const emits = defineEmits<{
  (_e: 'enter-program'): void
}>()

import { useDcyxProgramStore } from '@/store'

const dcyxProgramStore = useDcyxProgramStore()

const courseName = ref('')
const progressPercent = ref(0)
const taskCount = ref(0)
const memoryDuration = ref('00:00')
const vocabCount = ref(0)
const speed = ref(0)

// 已学单词数量
const learnedWordCount = computed(() => {
  return dcyxProgramStore.currentProgram.programStudyWordNumber
})
// 总共单词数
const totalWordCount = computed(() => {
  return dcyxProgramStore.currentProgram.programWordNumber
})

function initProgramInfo() {
  courseName.value =
    dcyxProgramStore.currentProgram.programName ?? '沐教牛津版2024 三年级起点'
  progressPercent.value = Number(
    (
      (Number(dcyxProgramStore.currentProgram.programStudyWordNumber) /
        Number(dcyxProgramStore.currentProgram.programWordNumber)) *
      100
    ).toFixed(0),
  )
  taskCount.value = 0
}

function initTaskInfo() {
  taskCount.value = 12
}

function initTodayVocabInfo() {
  memoryDuration.value = '05:00'
  vocabCount.value = 100
  speed.value = Math.round(
    vocabCount.value /
      (parseInt(memoryDuration.value.split(':')[0]) +
        parseInt(memoryDuration.value.split(':')[1]) / 60),
  )
}

function onEnterProgram() {
  emits('enter-program')
}

onMounted(() => {
  initProgramInfo()
  initTaskInfo()
  initTodayVocabInfo()
})
</script>

<style scoped lang="scss">
.right-board {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  // background: linear-gradient(135deg, #fdf6e3 0%, #f5f7fa 100%);
  // background: linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%);
}
.right-card {
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
.progress-section {
  margin-bottom: 20px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
}
.course-title {
  font-size: 16px;
  font-weight: bold;
  color: #1976d2;
  margin-bottom: 8px;
}
.task-section {
  background: rgba(255, 255, 255, 0.7);
  border-radius: 8px;
  padding: 12px;
  margin-top: 16px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
}
.task-title {
  font-size: 14px;
  font-weight: bold;
  color: #f57c00;
  margin-top: 4px;
}
.vocab-section {
  background: rgba(255, 255, 255, 0.7);
  border-radius: 8px;
  padding: 12px;
  margin-top: 16px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
}
.vocab-title {
  font-size: 14px;
  font-weight: bold;
  color: #43e97b;
  margin-bottom: 8px;
}
.vocab-info {
  font-size: 13px;
  color: #2d3a4b;
  div {
    margin-bottom: 4px;
    span {
      font-weight: bold;
      color: #1976d2;
    }
  }
}
.progress-section .el-progress--line {
  margin-bottom: 12px;
  max-width: 100%;
}
</style>
