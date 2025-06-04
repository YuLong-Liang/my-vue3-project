<template>
  <nav class="navbar">
    <router-link
      v-for="item in navItems"
      :key="item.path"
      :to="item.path"
      class="navbar__item"
      :class="{ active: isActive(item.path) }"
    >
      <el-icon class="navbar__icon">
        <component :is="item.icon" />
      </el-icon>
      <span class="navbar__text">{{ item.title }}</span>
    </router-link>
  </nav>
</template>

<script setup lang="ts">
import { ref, markRaw } from 'vue'
import { useRoute } from 'vue-router'
import {
  Reading,
  Histogram,
  Notebook,
  Collection,
  User,
} from '@element-plus/icons-vue'

const route = useRoute()

const navItems = ref([
  {
    title: '单词训练',
    path: '/work/word-training',
    icon: markRaw(Reading),
  },
  {
    title: '记忆追踪',
    path: '/work/memory-tracking',
    icon: markRaw(Histogram),
  },
  {
    title: '测试中心',
    path: '/work/test-center',
    icon: markRaw(Notebook),
  },
  {
    title: '单词本',
    path: '/work/word-book',
    icon: markRaw(Collection),
  },
  {
    title: '我的',
    path: '/work/my-profile',
    icon: markRaw(User),
  },
])

const isActive = (path: string) => {
  return route.path.startsWith(path)
}
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  padding: 0 10px;

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    height: 100%;
    color: var(--el-text-color-secondary);
    text-decoration: none;
    transition: all 0.3s;

    &:hover {
      color: var(--el-color-primary);
    }

    &.active {
      color: var(--el-color-primary);

      .navbar__icon {
        transform: scale(1.1);
      }
    }
  }

  &__icon {
    font-size: 24px;
    margin-bottom: 2px;
    transition: transform 0.3s;
  }

  &__text {
    font-size: 12px;
    line-height: 1;
  }
}
</style>
