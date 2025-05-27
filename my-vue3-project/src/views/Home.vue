<template>
  <div class="home-container">
    <el-container>
      <el-header class="header">
        <div class="header-left">
          <el-select v-model="currentSeries" placeholder="选择学期" @change="handleSeriesChange">
            <el-option
              v-for="series in seriesList"
              :key="series.id"
              :label="series.name"
              :value="series.id"
            ></el-option>
          </el-select>
        </div>
        <div class="header-right">
          <span class="username">{{ userInfo?.username }}</span>
          <el-button type="text" @click="handleLogout">退出</el-button>
        </div>
      </el-header>
      
      <el-main>
        <div v-if="loading" class="loading-container">
          <el-skeleton :rows="3" animated></el-skeleton>
        </div>
        
        <template v-else>
          <div v-if="currentProgram" class="program-info">
            <el-card class="program-card">
              <template #header>
                <div class="card-header">
                  <span>{{ currentProgram.name }}</span>
                </div>
              </template>
              <div class="program-stats">
                <div class="stat-item">
                  <div class="stat-value">{{ programStats.memoryTime }}</div>
                  <div class="stat-label">记忆时长</div>
                </div>
                <div class="stat-item">
                  <div class="stat-value">{{ programStats.wordCount }}</div>
                  <div class="stat-label">已学单词</div>
                </div>
                <div class="stat-item">
                  <div class="stat-value">{{ programStats.speed }}</div>
                  <div class="stat-label">学习速度</div>
                </div>
              </div>
            </el-card>
          </div>
          
          <div v-else class="no-program">
            <el-empty description="暂无课程"></el-empty>
          </div>
          
          <div class="quick-actions">
            <el-row :gutter="20">
              <el-col :span="8">
                <el-card shadow="hover" @click="navigateTo('memory')">
                  <el-icon><Timer /></el-icon>
                  <span>记忆追踪</span>
                </el-card>
              </el-col>
              <el-col :span="8">
                <el-card shadow="hover" @click="navigateTo('test')">
                  <el-icon><Document /></el-icon>
                  <span>测试中心</span>
                </el-card>
              </el-col>
              <el-col :span="8">
                <el-card shadow="hover" @click="navigateTo('profile')">
                  <el-icon><User /></el-icon>
                  <span>我的页面</span>
                </el-card>
              </el-col>
            </el-row>
          </div>
        </template>
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { Timer, Document, User } from '@element-plus/icons-vue'
import { useUserStore } from '@/stores/user'
import axios from 'axios'

const router = useRouter()
const userStore = useUserStore()
const loading = ref(false)
const seriesList = ref([])
const currentSeries = ref('')
const currentProgram = ref(null)
const programStats = ref({
  memoryTime: '0h',
  wordCount: 0,
  speed: '0词/天'
})

const userInfo = computed(() => userStore.userInfo)

const fetchSeriesList = async () => {
  try {
    const response = await axios.get('/api/series/getSeriesByUser')
    seriesList.value = response.data
    if (seriesList.value.length > 0) {
      currentSeries.value = seriesList.value[0].id
      await fetchProgramInfo()
    }
  } catch (error) {
    console.error('获取学期列表失败:', error)
    ElMessage.error('获取学期列表失败')
  }
}

const fetchProgramInfo = async () => {
  if (!currentSeries.value) return
  
  loading.value = true
  try {
    const response = await axios.get(`/api/program/unit/getUnitsByProgram/${currentSeries.value}`)
    currentProgram.value = response.data
    // 这里应该根据实际接口返回数据计算统计数据
    programStats.value = {
      memoryTime: '2.5h',
      wordCount: 150,
      speed: '30词/天'
    }
  } catch (error) {
    console.error('获取课程信息失败:', error)
    ElMessage.error('获取课程信息失败')
  } finally {
    loading.value = false
  }
}

const handleSeriesChange = () => {
  fetchProgramInfo()
}

const handleLogout = () => {
  userStore.logout()
  router.push('/login')
}

const navigateTo = (route: string) => {
  router.push(`/${route}`)
}

onMounted(() => {
  fetchSeriesList()
})
</script>

<style scoped lang="scss">
.home-container {
  min-height: 100vh;
  background-color: #f5f7fa;
  
  .header {
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    
    .header-right {
      display: flex;
      align-items: center;
      gap: 16px;
      
      .username {
        font-size: 14px;
        color: #606266;
      }
    }
  }
  
  .el-main {
    padding: 20px;
    
    .loading-container {
      max-width: 600px;
      margin: 0 auto;
    }
    
    .program-info {
      margin-bottom: 24px;
      
      .program-card {
        .card-header {
          font-size: 18px;
          font-weight: bold;
        }
        
        .program-stats {
          display: flex;
          justify-content: space-around;
          padding: 20px 0;
          
          .stat-item {
            text-align: center;
            
            .stat-value {
              font-size: 24px;
              font-weight: bold;
              color: #409EFF;
              margin-bottom: 8px;
            }
            
            .stat-label {
              color: #909399;
              font-size: 14px;
            }
          }
        }
      }
    }
    
    .quick-actions {
      margin-top: 24px;
      
      .el-card {
        text-align: center;
        cursor: pointer;
        transition: all 0.3s;
        
        &:hover {
          transform: translateY(-5px);
        }
        
        .el-icon {
          font-size: 24px;
          margin-bottom: 8px;
          color: #409EFF;
        }
        
        span {
          display: block;
          color: #606266;
        }
      }
    }
  }
}
</style> 