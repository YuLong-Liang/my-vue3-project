<template>
  <div class="my-profile">
    <div class="my-profile__header">
      <div class="profile-card">
        <div class="profile-card__avatar">
          <el-avatar :size="80" src="https://placeholder.com/150" />
          <el-button class="edit-avatar" circle size="small">
            <el-icon><Camera /></el-icon>
          </el-button>
        </div>
        <div class="profile-card__info">
          <h2 class="profile-card__name">用户名</h2>
          <p class="profile-card__bio">热爱学习，追求进步</p>
          <div class="profile-card__stats">
            <div class="stat-item">
              <span class="stat-value">128</span>
              <span class="stat-label">学习天数</span>
            </div>
            <div class="stat-item">
              <span class="stat-value">2,580</span>
              <span class="stat-label">已学单词</span>
            </div>
            <div class="stat-item">
              <span class="stat-value">92%</span>
              <span class="stat-label">掌握率</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="my-profile__content">
      <el-tabs v-model="activeTab" class="profile-tabs">
        <el-tab-pane label="学习数据" name="stats">
          <div class="stats-section">
            <div class="stats-card">
              <h3>学习趋势</h3>
              <div class="chart-container">
                <!-- 这里可以集成实际的图表组件 -->
                <div class="chart-placeholder">
                  <el-icon :size="48"><TrendCharts /></el-icon>
                  <p>学习趋势图表</p>
                </div>
              </div>
            </div>

            <div class="stats-grid">
              <el-card class="achievement-card" shadow="hover">
                <template #header>
                  <div class="achievement-card__header">
                    <el-icon :size="24" color="var(--el-color-warning)"
                      ><Trophy
                    /></el-icon>
                    <span>成就徽章</span>
                  </div>
                </template>
                <div class="achievement-card__content">
                  <div
                    v-for="badge in badges"
                    :key="badge.id"
                    class="badge-item"
                  >
                    <el-icon :size="32" :color="badge.color"
                      ><component :is="badge.icon"
                    /></el-icon>
                    <div class="badge-info">
                      <span class="badge-name">{{ badge.name }}</span>
                      <span class="badge-desc">{{ badge.description }}</span>
                    </div>
                  </div>
                </div>
              </el-card>

              <el-card class="streak-card" shadow="hover">
                <template #header>
                  <div class="streak-card__header">
                    <el-icon :size="24" color="var(--el-color-success)"
                      ><Calendar
                    /></el-icon>
                    <span>连续打卡</span>
                  </div>
                </template>
                <div class="streak-card__content">
                  <div class="streak-value">7</div>
                  <div class="streak-label">天</div>
                  <el-progress :percentage="70" :format="format" />
                </div>
              </el-card>
            </div>
          </div>
        </el-tab-pane>

        <el-tab-pane label="设置" name="settings">
          <div class="settings-section">
            <el-form label-position="top" class="settings-form">
              <el-form-item label="个人资料">
                <el-input v-model="profile.name" placeholder="用户名" />
                <el-input
                  v-model="profile.bio"
                  type="textarea"
                  placeholder="个人简介"
                  :rows="3"
                  class="mt-3"
                />
              </el-form-item>

              <el-form-item label="通知设置">
                <el-switch
                  v-model="settings.dailyReminder"
                  active-text="每日学习提醒"
                />
                <el-switch
                  v-model="settings.achievementNotification"
                  active-text="成就通知"
                  class="mt-3"
                />
              </el-form-item>

              <el-form-item label="学习目标">
                <el-input-number
                  v-model="settings.dailyGoal"
                  :min="10"
                  :max="100"
                  :step="5"
                />
                <span class="ml-2">个单词/天</span>
              </el-form-item>

              <el-form-item>
                <el-button type="primary">保存设置</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, markRaw } from 'vue'
import {
  Camera,
  TrendCharts,
  Trophy,
  Calendar,
  Star,
  Medal,
  Lightning,
} from '@element-plus/icons-vue'

const activeTab = ref('stats')

const profile = ref({
  name: '用户名',
  bio: '热爱学习，追求进步',
})

const settings = ref({
  dailyReminder: true,
  achievementNotification: true,
  dailyGoal: 50,
})

// 使用 markRaw 包装图标组件以避免不必要的响应式包装
const iconComponents = {
  Star: markRaw(Star),
  Medal: markRaw(Medal),
  Lightning: markRaw(Lightning),
}

const badges = [
  {
    id: 1,
    name: '学习达人',
    description: '连续学习7天',
    icon: iconComponents.Star,
    color: '#F7BA2A',
  },
  {
    id: 2,
    name: '词汇王者',
    description: '掌握1000个单词',
    icon: iconComponents.Medal,
    color: '#409EFF',
  },
  {
    id: 3,
    name: '闪电记忆',
    description: '单日学习100个单词',
    icon: iconComponents.Lightning,
    color: '#67C23A',
  },
]

const format = (percentage: number) => `目标: ${percentage}%`
</script>

<style lang="scss" scoped>
.my-profile {
  padding: 20px;
  height: 100%;
  background-color: var(--el-bg-color-page);

  &__header {
    margin-bottom: 24px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
}

.profile-card {
  background-color: #fff;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  gap: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  &__avatar {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;

    .edit-avatar {
      position: absolute;
      bottom: 0;
      right: 0;
      background-color: var(--el-color-primary);
      color: #fff;
    }
  }

  &__info {
    flex: 1;
  }

  &__name {
    margin: 0 0 8px;
    font-size: 24px;
    font-weight: 600;
    color: var(--el-text-color-primary);
  }

  &__bio {
    margin: 0 0 16px;
    color: var(--el-text-color-regular);
  }

  &__stats {
    display: flex;
    gap: 32px;
  }
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  .stat-value {
    font-size: 20px;
    font-weight: 600;
    color: var(--el-text-color-primary);
  }

  .stat-label {
    font-size: 14px;
    color: var(--el-text-color-secondary);
  }
}

.profile-tabs {
  :deep(.el-tabs__header) {
    margin-bottom: 20px;
  }
}

.stats-section {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.stats-card {
  background-color: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  h3 {
    margin: 0 0 16px;
    font-size: 18px;
    font-weight: 600;
    color: var(--el-text-color-primary);
  }
}

.chart-container {
  height: 300px;
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

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
}

.achievement-card {
  &__header {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 600;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}

.badge-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background-color: var(--el-bg-color-page);
  border-radius: 8px;

  .badge-info {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .badge-name {
    font-weight: 600;
    color: var(--el-text-color-primary);
  }

  .badge-desc {
    font-size: 12px;
    color: var(--el-text-color-secondary);
  }
}

.streak-card {
  &__header {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 600;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 16px 0;
  }

  .streak-value {
    font-size: 36px;
    font-weight: 600;
    color: var(--el-color-success);
  }

  .streak-label {
    font-size: 14px;
    color: var(--el-text-color-secondary);
  }
}

.settings-section {
  background-color: #fff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.settings-form {
  max-width: 600px;
}

.mt-3 {
  margin-top: 12px;
}

.ml-2 {
  margin-left: 8px;
}
</style>
