<template>
  <div class="layout-dcyx">
    <!-- 主内容区域 -->
    <div class="layout-dcyx__main">
      <router-view v-slot="{ Component }">
        <transition name="fade-transform" mode="out-in">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
    </div>

    <!-- 底部导航栏 -->
    <NavBar class="layout-dcyx__navbar" />
  </div>
</template>

<script setup lang="ts">
import NavBar from './components/NavBar/index.vue'
</script>

<style lang="scss" scoped>
.layout-dcyx {
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: var(--el-bg-color);

  &__main {
    height: calc(100vh - 60px); // 减去底部导航栏的高度
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }

  &__navbar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: #fff;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
    z-index: 100;
  }
}

// 页面切换动画
.fade-transform-enter-active,
.fade-transform-leave-active {
  transition: all 0.3s;
}

.fade-transform-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
