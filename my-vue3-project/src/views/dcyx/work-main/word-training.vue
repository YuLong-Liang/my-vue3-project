<template>
  <div class="word-training">
    <div class="word-training__container">
      <!-- 左侧单元列表 -->
      <div class="word-training__sidebar">
        <div class="unit-list">
          <div
            v-for="unit in unitList"
            :key="unit.id"
            class="unit-item"
            :class="{ 'is-active': currentUnit?.id === unit.id }"
            @click="handleUnitClick(unit)"
          >
            {{ unit.name }}
          </div>
        </div>
      </div>

      <!-- 右侧学习类型卡片 -->
      <div class="word-training__main">
        <template v-if="currentUnit">
          <div class="study-cards">
            <!-- 智能记忆卡片 -->
            <el-card class="study-card" @click="handleStudyClick('znjy')">
              <template #header>
                <div class="study-card__header">
                  <span class="study-card__title">智能记忆</span>
                  <el-tag
                    :type="
                      currentUnitCountWord.isEndZnjy === '1'
                        ? 'success'
                        : 'info'
                    "
                    size="small"
                  >
                    {{
                      currentUnitCountWord.isEndZnjy === '1'
                        ? '已完成'
                        : '进行中'
                    }}
                  </el-tag>
                </div>
              </template>
              <div class="study-card__content">
                <div class="study-info">
                  <div class="info-item">
                    <span class="label">单词数量：</span>
                    <span class="value">{{
                      currentUnitCountWord.unitTotal
                    }}</span>
                  </div>
                  <div class="info-item">
                    <span class="label">学习次数：</span>
                    <span class="value">{{
                      currentUnitCountWord.studyNumForZnjy
                    }}</span>
                  </div>
                  <div class="info-item">
                    <span class="label">测试时间：</span>
                    <span class="value">{{
                      currentUnitCountWord.testTimeForZnjy
                    }}</span>
                  </div>
                  <div class="info-item">
                    <span class="label">复习次数：</span>
                    <span class="value">{{
                      currentUnitCountWord.restudyNumForZnjy
                    }}</span>
                  </div>
                </div>
              </div>
            </el-card>

            <!-- 智能听写卡片 -->
            <el-card class="study-card" @click="handleStudyClick('zntx')">
              <template #header>
                <div class="study-card__header">
                  <span class="study-card__title">智能听写</span>
                  <el-tag
                    :type="
                      currentUnitCountWord.isEndZntx === '1'
                        ? 'success'
                        : 'info'
                    "
                    size="small"
                  >
                    {{
                      currentUnitCountWord.isEndZntx === '1'
                        ? '已完成'
                        : '进行中'
                    }}
                  </el-tag>
                </div>
              </template>
              <div class="study-card__content">
                <div class="study-info">
                  <div class="info-item">
                    <span class="label">单词数量：</span>
                    <span class="value">{{
                      currentUnitCountWord.unitTotal
                    }}</span>
                  </div>
                  <div class="info-item">
                    <span class="label">学习次数：</span>
                    <span class="value">{{
                      currentUnitCountWord.studyNumForZntx
                    }}</span>
                  </div>
                  <div class="info-item">
                    <span class="label">测试时间：</span>
                    <span class="value">{{
                      currentUnitCountWord.testTimeForZntx
                    }}</span>
                  </div>
                  <div class="info-item">
                    <span class="label">复习次数：</span>
                    <span class="value">{{
                      currentUnitCountWord.restudyNumForZntx
                    }}</span>
                  </div>
                </div>
              </div>
            </el-card>

            <!-- 智能默写卡片 -->
            <el-card class="study-card" @click="handleStudyClick('znmx')">
              <template #header>
                <div class="study-card__header">
                  <span class="study-card__title">智能默写</span>
                  <el-tag
                    :type="
                      currentUnitCountWord.isEndZnmx === '1'
                        ? 'success'
                        : 'info'
                    "
                    size="small"
                  >
                    {{
                      currentUnitCountWord.isEndZnmx === '1'
                        ? '已完成'
                        : '进行中'
                    }}
                  </el-tag>
                </div>
              </template>
              <div class="study-card__content">
                <div class="study-info">
                  <div class="info-item">
                    <span class="label">单词数量：</span>
                    <span class="value">{{
                      currentUnitCountWord.unitTotal
                    }}</span>
                  </div>
                  <div class="info-item">
                    <span class="label">学习次数：</span>
                    <span class="value">{{
                      currentUnitCountWord.studyNumForZnmx
                    }}</span>
                  </div>
                  <div class="info-item">
                    <span class="label">测试时间：</span>
                    <span class="value">{{
                      currentUnitCountWord.testTimeForZnmx
                    }}</span>
                  </div>
                  <div class="info-item">
                    <span class="label">复习次数：</span>
                    <span class="value">{{
                      currentUnitCountWord.restudyNumForZnmx
                    }}</span>
                  </div>
                </div>
              </div>
            </el-card>
          </div>
        </template>
        <el-empty v-else description="请选择学习单元" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { ref, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import { useDcyxProgramStore } from '@/store'
import type { UnitItem } from '@/api/dcyx_program.api'
import { useRouter } from 'vue-router'

// interface Unit {
//   id: string
//   name: string
//   studyNumForZnjy: string
//   studyNumForZnmx: string
//   studyNumForZntx: string
//   testTimeForZnjy: string
//   testTimeForZnmx: string
//   testTimeForZntx: string
//   restudyNumForZnjy: string
//   restudyNumForZnmx: string
//   restudyNumForZntx: string
//   isEndZnjy: string
//   isEndZntx: string
//   isEndZnmx: string
// }

const dcyxProgramStore = useDcyxProgramStore()
const router = useRouter()

const currentProgram = computed(() => dcyxProgramStore.currentProgram)
const unitList = ref<UnitItem[]>([])
const currentUnit = computed(() => dcyxProgramStore.currentUnit)
const currentUnitCountWord = computed(
  () => dcyxProgramStore.currentUnitCountWord,
)

// 获取单元列表
const fetchUnitList = async () => {
  try {
    // TODO: 调用 API 获取单元列表
    // const { data } = await getUnitsByProgram(seriesId, programId)
    // unitList.value = data
    const units = await dcyxProgramStore.getUnitsInfoByProgram(
      currentProgram.value.parentSeriesId,
      currentProgram.value.seriesId,
      currentProgram.value.programId,
    )
    unitList.value = units
    // 默认选中第一个单元
    if (units.length > 0) {
      dcyxProgramStore.currentUnit = units[0]
    }
  } catch {
    ElMessage.error('获取单元列表失败')
  }
}

// 获取单元详情
const fetchUnitInfo = async (_unitId: string) => {
  try {
    // TODO: 调用 API 获取单元详情
    // const { data } = await getUnitsInfoByProgram(parentId, programId, unitId)
    // currentUnit.value = data
    const unit = await dcyxProgramStore.countWordsByUnit(
      currentProgram.value.seriesId,
      currentProgram.value.programId,
      currentUnit.value?.name || '',
    )
    dcyxProgramStore.currentUnitCountWord = unit
  } catch {
    ElMessage.error('获取单元详情失败')
  }
}

// 处理单元点击
const handleUnitClick = (unit: UnitItem) => {
  dcyxProgramStore.currentUnit = unit
  fetchUnitInfo(unit.id)
}

// 处理学习类型点击
const handleStudyClick = (type: 'znjy' | 'zntx' | 'znmx') => {
  if (!currentUnit.value) return

  const typeMap = {
    znjy: {
      name: '智能记忆',
      path: '/dcyx/inteli-memory',
    },
    zntx: {
      name: '智能听写',
      path: '/dcyx/inteli-dictation',
    },
    znmx: {
      name: '智能默写',
      path: '/dcyx/inteli-writing',
    },
  }

  const target = typeMap[type]
  router.push(target.path)
}

onMounted(() => {
  fetchUnitList()
})
</script>

<style lang="scss" scoped>
.word-training {
  height: 100%;
  background-color: var(--el-bg-color-page);
  padding: 12px;

  &__container {
    display: flex;
    gap: 12px;
    height: 100%;
  }

  &__sidebar {
    width: 200px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }

  &__main {
    flex: 1;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    padding: 16px;
  }
}

.unit-list {
  .unit-item {
    padding: 8px 12px;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s;
    border-bottom: 1px solid var(--el-border-color-lighter);

    &:hover {
      background-color: var(--el-color-primary-light-9);
    }

    &.is-active {
      background-color: var(--el-color-primary-light-8);
      color: var(--el-color-primary);
      font-weight: 500;
    }
  }
}

.study-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 12px;
}

.study-card {
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    font-size: 16px;
    font-weight: 500;
  }

  &__content {
    padding: 8px 0;
  }
}

.study-info {
  .info-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 4px;
    font-size: 13px;
    color: var(--el-text-color-regular);

    &:last-child {
      margin-bottom: 0;
    }

    .label {
      color: var(--el-text-color-secondary);
    }

    .value {
      font-weight: 500;
    }
  }
}
</style>
