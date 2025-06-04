<template>
  <div class="word-training">
    <div class="word-training__header">
      <h2 class="word-training__title">单词训练</h2>
      <el-progress :percentage="75" :format="format" />
    </div>

    <div class="word-training__content">
      <div class="word-card">
        <div class="word-card__word">Apple</div>
        <div class="word-card__phonetic">/ˈæp.əl/</div>
        <div class="word-card__meaning">n. 苹果</div>
        <div class="word-card__example">
          An apple a day keeps the doctor away.
        </div>
      </div>

      <div class="word-training__actions">
        <el-button type="primary" size="large" class="action-btn">
          <el-icon><Check /></el-icon>
          认识
        </el-button>
        <el-button type="warning" size="large" class="action-btn">
          <el-icon><QuestionFilled /></el-icon>
          模糊
        </el-button>
        <el-button type="danger" size="large" class="action-btn">
          <el-icon><Close /></el-icon>
          不认识
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Check, QuestionFilled, Close } from '@element-plus/icons-vue'

const format = (percentage: number) => `今日进度 ${percentage}%`
</script>

<style lang="scss" scoped>
.word-training {
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

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
}

.word-card {
  width: 100%;
  max-width: 400px;
  padding: 24px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  text-align: center;

  &__word {
    font-size: 32px;
    font-weight: 600;
    color: var(--el-text-color-primary);
    margin-bottom: 8px;
  }

  &__phonetic {
    font-size: 18px;
    color: var(--el-text-color-secondary);
    margin-bottom: 16px;
  }

  &__meaning {
    font-size: 20px;
    color: var(--el-text-color-primary);
    margin-bottom: 16px;
  }

  &__example {
    font-size: 16px;
    color: var(--el-text-color-regular);
    font-style: italic;
    line-height: 1.5;
  }
}

.word-training__actions {
  display: flex;
  gap: 12px;
  width: 100%;
  max-width: 400px;

  .action-btn {
    flex: 1;
    height: 48px;
    font-size: 16px;

    .el-icon {
      margin-right: 4px;
    }
  }
}
</style>
