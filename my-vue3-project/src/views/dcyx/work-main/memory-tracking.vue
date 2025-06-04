<template>
  <div class="memory-tracking">
    <div class="memory-tracking__header">
      <h2 class="memory-tracking__title">记忆追踪</h2>
      <div class="memory-tracking__stats">
        <div class="stat-card">
          <div class="stat-card__value">128</div>
          <div class="stat-card__label">已学单词</div>
        </div>
        <div class="stat-card">
          <div class="stat-card__value">85%</div>
          <div class="stat-card__label">掌握率</div>
        </div>
        <div class="stat-card">
          <div class="stat-card__value">7</div>
          <div class="stat-card__label">连续天数</div>
        </div>
      </div>
    </div>

    <div class="memory-tracking__content">
      <div class="chart-card">
        <div class="chart-card__header">
          <h3>学习趋势</h3>
          <el-radio-group v-model="timeRange" size="small">
            <el-radio-button label="week">周</el-radio-button>
            <el-radio-button label="month">月</el-radio-button>
          </el-radio-group>
        </div>
        <div class="chart-card__chart">
          <!-- 这里可以集成实际的图表组件 -->
          <div class="chart-placeholder">
            <el-icon :size="48"><TrendCharts /></el-icon>
            <p>学习趋势图表</p>
          </div>
        </div>
      </div>

      <div class="memory-tracking__list">
        <h3>最近学习</h3>
        <el-timeline>
          <el-timeline-item
            v-for="(activity, index) in recentActivities"
            :key="index"
            :type="activity.type"
            :timestamp="activity.time"
          >
            {{ activity.content }}
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TrendCharts } from '@element-plus/icons-vue'

const timeRange = ref('week')

const recentActivities = [
  {
    content: '完成今日单词训练 (25个)',
    time: '今天 14:30',
    type: 'success' as const,
  },
  {
    content: '复习单词 (50个)',
    time: '今天 10:15',
    type: 'primary' as const,
  },
  {
    content: '完成测试 (得分: 95)',
    time: '昨天 16:45',
    type: 'warning' as const,
  },
  {
    content: '学习新单词 (30个)',
    time: '昨天 09:20',
    type: 'info' as const,
  },
]
</script>

<style lang="scss" scoped>
.memory-tracking {
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

  &__list {
    h3 {
      margin: 0 0 16px;
      font-size: 18px;
      font-weight: 600;
      color: var(--el-text-color-primary);
    }
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

.chart-card {
  background-color: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    h3 {
      margin: 0;
      font-size: 18px;
      font-weight: 600;
      color: var(--el-text-color-primary);
    }
  }

  &__chart {
    height: 200px;
  }
}

.chart-placeholder {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--el-text-color-secondary);
  background-color: var(--el-bg-color-page);
  border-radius: 8px;

  p {
    margin: 8px 0 0;
    font-size: 14px;
  }
}
</style>
