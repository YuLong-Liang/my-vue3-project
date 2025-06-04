<template>
  <div class="word-book">
    <div class="word-book__header">
      <h2 class="word-book__title">单词本</h2>
      <div class="word-book__actions">
        <el-input
          v-model="searchQuery"
          placeholder="搜索单词..."
          class="search-input"
          :prefix-icon="Search"
        />
        <el-button type="primary" :icon="Plus">新建单词本</el-button>
      </div>
    </div>

    <div class="word-book__content">
      <div class="word-book__categories">
        <el-tabs v-model="activeCategory" class="category-tabs">
          <el-tab-pane label="全部" name="all">
            <div class="book-grid">
              <el-card
                v-for="book in wordBooks"
                :key="book.id"
                class="book-card"
                shadow="hover"
              >
                <template #header>
                  <div class="book-card__header">
                    <span class="book-card__title">{{ book.title }}</span>
                    <el-dropdown>
                      <el-button link>
                        <el-icon><More /></el-icon>
                      </el-button>
                      <template #dropdown>
                        <el-dropdown-menu>
                          <el-dropdown-item>编辑</el-dropdown-item>
                          <el-dropdown-item>分享</el-dropdown-item>
                          <el-dropdown-item divided class="text-danger"
                            >删除</el-dropdown-item
                          >
                        </el-dropdown-menu>
                      </template>
                    </el-dropdown>
                  </div>
                </template>
                <div class="book-card__content">
                  <div class="book-card__stats">
                    <div class="stat-item">
                      <span class="stat-label">单词数</span>
                      <span class="stat-value">{{ book.wordCount }}</span>
                    </div>
                    <div class="stat-item">
                      <span class="stat-label">已掌握</span>
                      <span class="stat-value">{{ book.masteredCount }}</span>
                    </div>
                    <div class="stat-item">
                      <span class="stat-label">进度</span>
                      <el-progress
                        :percentage="book.progress"
                        :stroke-width="8"
                      />
                    </div>
                  </div>
                  <div class="book-card__tags">
                    <el-tag
                      v-for="tag in book.tags"
                      :key="tag"
                      size="small"
                      class="tag"
                    >
                      {{ tag }}
                    </el-tag>
                  </div>
                  <div class="book-card__actions">
                    <el-button type="primary" link>开始学习</el-button>
                    <el-button type="primary" link>查看详情</el-button>
                  </div>
                </div>
              </el-card>
            </div>
          </el-tab-pane>
          <el-tab-pane label="我的收藏" name="favorites">
            <!-- Similar content structure as "all" tab -->
          </el-tab-pane>
          <el-tab-pane label="最近学习" name="recent">
            <!-- Similar content structure as "all" tab -->
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Search, Plus, More } from '@element-plus/icons-vue'

const searchQuery = ref('')
const activeCategory = ref('all')

const wordBooks = [
  {
    id: 1,
    title: '四级核心词汇',
    wordCount: 2000,
    masteredCount: 850,
    progress: 42,
    tags: ['四级', '核心词汇', '考试'],
  },
  {
    id: 2,
    title: '日常会话必备',
    wordCount: 500,
    masteredCount: 320,
    progress: 64,
    tags: ['日常', '会话', '实用'],
  },
  {
    id: 3,
    title: '商务英语词汇',
    wordCount: 800,
    masteredCount: 150,
    progress: 19,
    tags: ['商务', '职场', '专业'],
  },
  {
    id: 4,
    title: '旅游英语词汇',
    wordCount: 300,
    masteredCount: 280,
    progress: 93,
    tags: ['旅游', '实用', '场景'],
  },
]
</script>

<style lang="scss" scoped>
.word-book {
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

  &__actions {
    display: flex;
    gap: 16px;
    align-items: center;

    .search-input {
      width: 300px;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
}

.category-tabs {
  :deep(.el-tabs__header) {
    margin-bottom: 20px;
  }
}

.book-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
}

.book-card {
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    font-weight: 600;
    font-size: 16px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__stats {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    .tag {
      margin-right: 0;
    }
  }

  &__actions {
    display: flex;
    justify-content: flex-end;
    gap: 12px;
  }
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 4px;

  &:last-child {
    grid-column: span 2;
  }
}

.stat-label {
  font-size: 12px;
  color: var(--el-text-color-secondary);
}

.stat-value {
  font-size: 16px;
  font-weight: 600;
  color: var(--el-text-color-primary);
}

.text-danger {
  color: var(--el-color-danger);
}
</style>
