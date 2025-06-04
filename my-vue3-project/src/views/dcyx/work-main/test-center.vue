<template>
  <div class="test-center">
    <div class="test-center__header">
      <h2 class="test-center__title">测试中心</h2>
      <div class="test-center__stats">
        <div class="stat-card">
          <div class="stat-card__value">92</div>
          <div class="stat-card__label">平均分</div>
        </div>
        <div class="stat-card">
          <div class="stat-card__value">15</div>
          <div class="stat-card__label">已完成测试</div>
        </div>
        <div class="stat-card">
          <div class="stat-card__value">3</div>
          <div class="stat-card__label">待完成</div>
        </div>
      </div>
    </div>

    <div class="test-center__content">
      <div class="test-section">
        <h3>推荐测试</h3>
        <div class="test-grid">
          <el-card
            v-for="test in recommendedTests"
            :key="test.id"
            class="test-card"
            shadow="hover"
          >
            <template #header>
              <div class="test-card__header">
                <span class="test-card__title">{{ test.title }}</span>
                <el-tag
                  :type="
                    test.difficulty === 'easy'
                      ? 'success'
                      : test.difficulty === 'medium'
                        ? 'warning'
                        : 'danger'
                  "
                >
                  {{
                    test.difficulty === 'easy'
                      ? '简单'
                      : test.difficulty === 'medium'
                        ? '中等'
                        : '困难'
                  }}
                </el-tag>
              </div>
            </template>
            <div class="test-card__content">
              <p class="test-card__desc">{{ test.description }}</p>
              <div class="test-card__meta">
                <span
                  ><el-icon><Timer /></el-icon> {{ test.duration }}分钟</span
                >
                <span
                  ><el-icon><Document /></el-icon>
                  {{ test.questionCount }}题</span
                >
              </div>
              <el-button type="primary" class="test-card__button"
                >开始测试</el-button
              >
            </div>
          </el-card>
        </div>
      </div>

      <div class="test-section">
        <h3>历史记录</h3>
        <el-table :data="testHistory" style="width: 100%" :stripe="true">
          <el-table-column prop="date" label="日期" width="180" />
          <el-table-column prop="title" label="测试名称" />
          <el-table-column prop="score" label="得分" width="100">
            <template #default="{ row }">
              <span
                :class="[
                  'score',
                  row.score >= 90
                    ? 'score-high'
                    : row.score >= 60
                      ? 'score-medium'
                      : 'score-low',
                ]"
              >
                {{ row.score }}
              </span>
            </template>
          </el-table-column>
          <el-table-column prop="duration" label="用时" width="120" />
          <el-table-column label="操作" width="120">
            <template #default>
              <el-button link type="primary">查看详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Timer, Document } from '@element-plus/icons-vue'

const recommendedTests = [
  {
    id: 1,
    title: '基础词汇测试',
    description: '测试你对基础词汇的掌握程度，包含常见生活用语和基础词汇。',
    difficulty: 'easy',
    duration: 15,
    questionCount: 20,
  },
  {
    id: 2,
    title: '进阶词汇挑战',
    description: '挑战你的词汇量，包含更多专业词汇和复杂表达。',
    difficulty: 'medium',
    duration: 20,
    questionCount: 25,
  },
  {
    id: 3,
    title: '高级词汇精通',
    description: '测试你对高级词汇和复杂语法的掌握程度。',
    difficulty: 'hard',
    duration: 30,
    questionCount: 30,
  },
]

const testHistory = [
  {
    date: '2024-03-15 14:30',
    title: '基础词汇测试',
    score: 95,
    duration: '12分钟',
  },
  {
    date: '2024-03-14 10:15',
    title: '进阶词汇挑战',
    score: 88,
    duration: '18分钟',
  },
  {
    date: '2024-03-13 16:45',
    title: '高级词汇精通',
    score: 75,
    duration: '25分钟',
  },
]
</script>

<style lang="scss" scoped>
.test-center {
  padding: 20px;
  height: 100%;
  background-color: var(--el-bg-color-page);

  &__header {
    margin-bottom: 24px;
  }

  &__title {
    margin: 0 0 16px;
    font-size: 24px;
    font-weight: 600;
    color: var(--el-text-color-primary);
  }

  &__stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
}

.stat-card {
  padding: 16px;
  background-color: #fff;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  &__value {
    font-size: 24px;
    font-weight: 600;
    color: var(--el-color-primary);
    margin-bottom: 4px;
  }

  &__label {
    font-size: 14px;
    color: var(--el-text-color-secondary);
  }
}

.test-section {
  h3 {
    margin: 0 0 16px;
    font-size: 18px;
    font-weight: 600;
    color: var(--el-text-color-primary);
  }
}

.test-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
}

.test-card {
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    font-weight: 600;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__desc {
    margin: 0;
    color: var(--el-text-color-regular);
    font-size: 14px;
    line-height: 1.5;
  }

  &__meta {
    display: flex;
    gap: 16px;
    color: var(--el-text-color-secondary);
    font-size: 14px;

    .el-icon {
      margin-right: 4px;
    }
  }

  &__button {
    margin-top: 8px;
  }
}

.score {
  font-weight: 600;

  &-high {
    color: var(--el-color-success);
  }

  &-medium {
    color: var(--el-color-warning);
  }

  &-low {
    color: var(--el-color-danger);
  }
}
</style>
