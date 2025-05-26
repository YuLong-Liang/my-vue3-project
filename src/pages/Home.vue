<template>
  <div class="home">
    <el-card class="welcome-card">
      <template #header>
        <div class="card-header">
          <h2>欢迎使用 Vue3 Admin</h2>
        </div>
      </template>
      <div class="card-content">
        <p>这是一个基于 Vue3 + TypeScript + Vite 构建的后台管理系统模板</p>
        <el-button type="primary" @click="goToAbout">了解更多</el-button>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goToAbout = () => {
  router.push('/about')
}
</script>

<style scoped lang="scss">
.home {
  padding: 20px;
  
  .welcome-card {
    max-width: 800px;
    margin: 0 auto;
    
    .card-header {
      text-align: center;
      
      h2 {
        margin: 0;
        color: var(--primary-color);
      }
    }
    
    .card-content {
      text-align: center;
      padding: 20px 0;
      
      p {
        margin-bottom: 20px;
        color: var(--text-color-secondary);
      }
    }
  }
}
</style> 