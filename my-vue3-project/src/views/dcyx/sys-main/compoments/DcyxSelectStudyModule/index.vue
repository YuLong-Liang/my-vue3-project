<template>
  <div class="select-study-module">
    <!-- 页面标题 -->
    <!-- <header class="header">
      <h1>单词易记智能英语</h1>
    </header> -->
    <!-- 顶部 Tabs -->
    <nav class="tabs">
      <button
        v-for="tab in tabList"
        :key="tab.id"
        :class="['tab', { active: tab.id === selectedTab?.id }]"
        @click="handleTabChange(tab.id)"
      >
        {{ tab.nameZhCn }}
      </button>
    </nav>
    <div class="main-content">
      <!-- 左侧 series 列表 -->
      <aside class="serie-list">
        <div
          v-for="serieItem in serieList"
          :key="serieItem.id"
          :class="[
            'serie-item',
            { selected: serieItem.id === selectedSeries.id },
          ]"
          @click="handleSerieSelect(serieItem.id)"
        >
          <span class="icon-a">A</span>
          <span class="version-name">{{ serieItem.nameZhCn }}</span>
        </div>
      </aside>
      <!-- 右侧 program 列表 -->
      <section class="program-cards">
        <div
          v-for="programItem in programList"
          :key="programItem.id"
          class="program-card"
          @click="handleModuleClick(programItem)"
        >
          <div class="program-title">{{ programItem.nameZhCn }}</div>
          <div class="progress-ring">
            <!-- 进度环，使用 SVG 实现 -->
            <svg width="60" height="60">
              <circle
                class="progress-bg"
                cx="30"
                cy="30"
                r="26"
                stroke="#e0e7ef"
                stroke-width="6"
                fill="none"
              />
              <circle
                class="progress-bar"
                :stroke="'#409eff'"
                cx="30"
                cy="30"
                r="26"
                stroke-width="6"
                fill="none"
                :stroke-dasharray="circumference"
                :stroke-dashoffset="
                  circumference - programItem.percent * circumference
                "
                stroke-linecap="round"
                transform="rotate(-90 30 30)"
              />
              <text
                x="30"
                y="36"
                text-anchor="middle"
                font-size="16"
                fill="#409eff"
              >
                {{ Math.round(programItem.percent * 100) }}%
              </text>
            </svg>
          </div>
          <div class="program-words">
            {{ programItem.studyNumber }}/{{ programItem.totalWords }} 单词
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'DcyxSelectStudyModule',
  inheritAttrs: false,
})

import { ref, onMounted } from 'vue'
import { useDcyxSeriesStore } from '@/store'
import { useDcyxProgramStore } from '@/store'
import type { TabItem, SerieItem } from '@/api/dcyx_series.api'
import type { ProgramItem } from '@/api/dcyx_program.api'

const dcyxSeriesStore = useDcyxSeriesStore()
const dcyxProgramStore = useDcyxProgramStore()

const selectedTab = ref<TabItem | null>(null)
const selectedSeries = ref<SerieItem>({} as SerieItem)

const tabList = ref<TabItem[]>([])
const serieList = ref<SerieItem[]>([])
const programList = ref<ProgramItem[]>([])

// 进度环周长
const circumference = 2 * Math.PI * 26

// 模块卡片点击
const handleModuleClick = (programItem: ProgramItem) => {
  // TODO: 跳转到具体单词学习页面或弹窗
  alert(`进入模块：${programItem.name}`)
}

// Handle tab changes
const handleTabChange = async (tabId: string) => {
  selectedTab.value = tabList.value.find((item) => item.id === tabId)!
  serieList.value = await dcyxSeriesStore.getSeriesByParentId(+tabId)
}

// Handle version selection
const handleSerieSelect = async (seriesId: string) => {
  selectedSeries.value = serieList.value.find((item) => item.id === seriesId)!
  programList.value = await dcyxProgramStore.getProgramBySeriesId(seriesId)
}

// 获取 series 列表  series/getSeriesByUser  GET
// 设置 选中的 series
// 获取 seriesParent 列表  series/getSeriesByParentId/:id  GET
// 设置 选中的 seriesParent
// 获取 programs 列表  program/getProgramBySeriesId/:id  GET
// study/state/getCurrentProgram GET 查询得到 seriesId、parentSeriesId 为选中的 series 与 seriesParent;
const initSelectStudyModule = async () => {
  // 获取标签列表
  tabList.value = dcyxSeriesStore.tabList

  // 选中的 series 与 seriesParent
  if (dcyxSeriesStore.currentSeriesParentId && tabList.value.length > 0) {
    selectedTab.value =
      tabList.value.find(
        (item) => +item.id === dcyxSeriesStore.currentSeriesParentId,
      ) || tabList.value[0]
  }

  if (selectedTab.value) {
    serieList.value = await dcyxSeriesStore.getSeriesByParentId(
      dcyxSeriesStore.currentSeriesParentId,
    )

    selectedSeries.value =
      serieList.value.find(
        (item) => +item.id === dcyxSeriesStore.currentSeriesId,
      ) || ({} as SerieItem)

    if (dcyxSeriesStore.currentSeriesId) {
      programList.value = await dcyxProgramStore.getProgramBySeriesId(
        dcyxSeriesStore.currentSeriesId.toString(),
      )
    }
  }
}

// 初始化加载
onMounted(() => {
  try {
    initSelectStudyModule()
  } catch (error) {
    console.error('初始化加载失败', error)
  }
})
</script>

<style scoped>
.select-study-module {
  display: flex;
  flex-direction: column;
  height: 600px;
  background: #f6f8fa;
}
.header {
  text-align: center;
  padding: 16px 0 8px 0;
  font-size: 20px;
  font-weight: bold;
  color: #409eff;
  background: #fff;
  box-shadow: 0 1px 4px #f0f1f2;
}
.tabs {
  display: flex;
  justify-content: center;
  background: #fff;
  border-bottom: 1px solid #e0e7ef;
  padding: 4px 0;
}
.tab {
  margin: 0 12px;
  padding: 6px 16px;
  border-radius: 16px;
  background: none;
  border: none;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  transition:
    background 0.2s,
    color 0.2s;
}
.tab.active {
  background: #409eff;
  color: #fff;
}
.main-content {
  display: flex;
  flex: 1;
  overflow: hidden;
}
.serie-list {
  width: 160px;
  background: #fff;
  border-right: 1px solid #e0e7ef;
  overflow-y: auto;
  padding: 12px 0;
}
.serie-item {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 6px;
  margin-bottom: 4px;
  transition: background 0.2s;
}
.serie-item.selected {
  background: #e3f0fe;
  color: #409eff;
}
.icon-a {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: #409eff;
  color: #fff;
  border-radius: 50%;
  text-align: center;
  line-height: 20px;
  font-size: 14px;
  margin-right: 8px;
}
.version-name {
  font-size: 14px;
}
.program-cards {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  padding: 16px;
  overflow-y: auto;
  background: #f6f8fa;
}
.program-card {
  width: 100%;
  background: #e3f0fe;
  border-radius: 12px;
  box-shadow: 0 1px 4px #e0e7ef;
  padding: 16px 0 12px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition:
    box-shadow 0.2s,
    transform 0.2s;
}
.program-card:hover {
  box-shadow: 0 2px 8px #b3d8fd;
  transform: translateY(-1px) scale(1.02);
}
.program-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #409eff;
}
.progress-ring {
  margin-bottom: 8px;
}
.progress-ring svg {
  width: 50px;
  height: 50px;
}
.progress-ring circle {
  cx: 25;
  cy: 25;
  r: 22;
  stroke-width: 4;
}
.progress-ring text {
  x: 25;
  y: 30;
  font-size: 14px;
}
.program-words {
  font-size: 13px;
  color: #666;
  margin-top: 2px;
}
</style>
