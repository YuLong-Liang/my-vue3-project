<template>
  <div class="about">
    <el-card>
      <template #header>
        <div class="card-header">
          <h2>关于项目</h2>
        </div>
      </template>
      <div class="card-content">
        <h3>技术栈</h3>
        <el-descriptions :column="1" border>
          <el-descriptions-item label="前端框架">Vue 3</el-descriptions-item>
          <el-descriptions-item label="构建工具">Vite</el-descriptions-item>
          <el-descriptions-item label="状态管理">Pinia</el-descriptions-item>
          <el-descriptions-item label="UI 框架">Element Plus</el-descriptions-item>
          <el-descriptions-item label="路由">Vue Router 4</el-descriptions-item>
          <el-descriptions-item label="HTTP 客户端">Axios</el-descriptions-item>
          <el-descriptions-item label="CSS 预处理器">SCSS</el-descriptions-item>
        </el-descriptions>
        
        <div class="actions">
          <el-button @click="goBack">返回首页</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.push('/')
}
</script>

<style scoped lang="scss">
.about {
  padding: 20px;
  
  .card-header {
    text-align: center;
    
    h2 {
      margin: 0;
      color: var(--primary-color);
    }
  }
  
  .card-content {
    h3 {
      margin-bottom: 20px;
      color: var(--text-color);
    }
    
    .actions {
      margin-top: 20px;
      text-align: center;
    }
  }
}
</style> 