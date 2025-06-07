<template>
  <div class="word-training">
    <!-- 顶部导航栏 -->
    <div class="word-training__header">
      <div class="header-left">
        <h2 class="word-training__title">智能记忆</h2>
        <span class="unit-name">{{ currentUnit?.name }}</span>
      </div>
      <el-button @click="handleExit" type="primary" plain>
        <el-icon><Back /></el-icon>
        退出
      </el-button>
    </div>

    <!-- 单词卡片 -->
    <div class="word-training__content">
      <div class="word-card">
        <!-- 单词和音标 -->
        <div class="word-card__top">
          <div class="word-card__word">{{ currentWord?.spelling }}</div>
          <div class="word-card__phonetic">{{ currentWord?.syllable }}</div>
          <el-button
            class="sound-btn"
            circle
            @click="playWordSound"
            :icon="Microphone"
          />
        </div>

        <!-- 进度条 -->
        <div class="word-card__progress">
          <el-progress :percentage="studyProgress" :format="progressFormat" />
          <span class="progress-text"
            >{{ currentIndex + 1 }}/{{ totalWords }}</span
          >
        </div>

        <!-- 词性和词义 -->
        <div v-if="currentState !== 'recognition'" class="word-card__meaning">
          <div class="meaning-content">
            <span class="part-of-speech"
              >{{ currentWord?.meaningZhCn.split('.')[0] }}.</span
            >
            <span class="meaning">{{
              currentWord?.meaningZhCn.split('.')[1]
            }}</span>
          </div>
          <div v-if="currentState === 'reinforcement'" class="study-times">
            剩余学习次数: {{ remainingStudyTimes }}
          </div>
        </div>

        <!-- 例句 -->
        <div v-if="currentState === 'reinforcement'" class="word-card__example">
          {{ currentWord?.exampleEnUs }}
          <div class="example-cn">{{ currentWord?.exampleZhCn }}</div>
        </div>

        <!-- 操作按钮 -->
        <div class="word-card__actions">
          <!-- 状态1：认识判断 -->
          <template v-if="currentState === 'recognition'">
            <div class="countdown">{{ countdown }}s</div>
            <div class="action-buttons">
              <el-button
                type="success"
                size="large"
                @click="handleRecognition(true)"
              >
                <el-icon><CircleCheckFilled /></el-icon>
                认识
              </el-button>
              <el-button
                type="danger"
                size="large"
                @click="handleRecognition(false)"
              >
                <el-icon><CircleCloseFilled /></el-icon>
                不认识
              </el-button>
            </div>
          </template>

          <!-- 状态2：确认认识 -->
          <template v-if="currentState === 'confirmation'">
            <div class="action-buttons">
              <el-button
                type="success"
                size="large"
                @click="handleConfirmation(true)"
              >
                <el-icon><Check /></el-icon>
                确认认识
              </el-button>
              <el-button
                type="danger"
                size="large"
                @click="handleConfirmation(false)"
              >
                <el-icon><Close /></el-icon>
                确认不认识
              </el-button>
            </div>
          </template>

          <!-- 状态3：加强学习 -->
          <template v-if="currentState === 'reinforcement'">
            <div class="action-buttons">
              <el-button
                type="primary"
                size="large"
                @click="handleReinforcement"
                :icon="remainingStudyTimes > 0 ? '' : 'ArrowRight'"
              >
                {{
                  remainingStudyTimes > 0
                    ? `剩余学习次数: ${remainingStudyTimes}`
                    : '下一个'
                }}
              </el-button>
            </div>
          </template>
        </div>
      </div>
    </div>

    <!-- 底部进度信息 -->
    <div class="word-training__footer">
      <div class="progress-info">
        <span>生词数: {{ unknownWords }}</span>
        <span>熟词数: {{ knownWords }}</span>
        <span>总词数: {{ totalWords }}</span>
        <span>当前进度: {{ currentIndex + 1 }}/{{ totalWords }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import {
  Back,
  Microphone,
  CircleCheckFilled,
  CircleCloseFilled,
  Check,
  Close,
} from '@element-plus/icons-vue'
import { useDcyxProgramStore } from '@/store'

// 状态类型定义
type StudyState = 'recognition' | 'confirmation' | 'reinforcement'

// 单词类型定义
interface Word {
  id: string
  spelling: string
  syllable: string
  meaningZhCn: string
  exampleEnUs: string
  exampleZhCn: string
  unitName: string
}

const router = useRouter()
const dcyxProgramStore = useDcyxProgramStore()

// 状态管理
const currentState = ref<StudyState>('recognition')
const countdown = ref(5)
const currentIndex = ref(0)
const remainingStudyTimes = ref(2)
const knownWords = ref(0)
const unknownWords = ref(0)

// 模拟单词数据
const wordList = ref<Word[]>([
  {
    id: '56155',
    spelling: 'fiction',
    syllable: "'fikʃən",
    meaningZhCn: 'n. 小说',
    exampleEnUs: 'She writes science fiction.',
    exampleZhCn: '她写科幻小说。',
    unitName: 'Unit12',
  },
  {
    id: '56156',
    spelling: 'brilliant',
    syllable: "'brɪliənt",
    meaningZhCn: 'adj. 杰出的，卓越的',
    exampleEnUs: 'She has a brilliant mind.',
    exampleZhCn: '她有一个杰出的头脑。',
    unitName: 'Unit12',
  },
  {
    id: '56157',
    spelling: 'perseverance',
    syllable: "pə'sɪvərəns",
    meaningZhCn: 'n. 毅力，坚持不懈',
    exampleEnUs: 'Success comes from perseverance.',
    exampleZhCn: '成功来自于坚持不懈。',
    unitName: 'Unit12',
  },
  {
    id: '56158',
    spelling: 'eloquent',
    syllable: "'eləkwənt",
    meaningZhCn: 'adj. 雄辩的，有说服力的',
    exampleEnUs: 'He gave an eloquent speech.',
    exampleZhCn: '他发表了一场雄辩的演讲。',
    unitName: 'Unit12',
  },
  {
    id: '56159',
    spelling: 'serendipity',
    syllable: "serən'dɪpəti",
    meaningZhCn: 'n. 意外发现，机缘巧合',
    exampleEnUs: 'Meeting you was pure serendipity.',
    exampleZhCn: '遇见你纯属机缘巧合。',
    unitName: 'Unit12',
  },
  {
    id: '56160',
    spelling: 'ephemeral',
    syllable: "ɪ'femərəl",
    meaningZhCn: 'adj. 短暂的，瞬息的',
    exampleEnUs: 'Social media fame is often ephemeral.',
    exampleZhCn: '社交媒体上的名气往往是短暂的。',
    unitName: 'Unit12',
  },
  {
    id: '56161',
    spelling: 'meticulous',
    syllable: "mə'tɪkjələs",
    meaningZhCn: 'adj. 一丝不苟的，严谨的',
    exampleEnUs: 'She is meticulous about her work.',
    exampleZhCn: '她对工作一丝不苟。',
    unitName: 'Unit12',
  },
  {
    id: '56162',
    spelling: 'ubiquitous',
    syllable: "juː'bɪkwɪtəs",
    meaningZhCn: 'adj. 无处不在的，普遍存在的',
    exampleEnUs: 'Smartphones have become ubiquitous.',
    exampleZhCn: '智能手机已经变得无处不在。',
    unitName: 'Unit12',
  },
  {
    id: '56163',
    spelling: 'paradigm',
    syllable: "'pærədaɪm",
    meaningZhCn: 'n. 范例，模式',
    exampleEnUs: 'This represents a new paradigm in education.',
    exampleZhCn: '这代表了教育的新模式。',
    unitName: 'Unit12',
  },
  {
    id: '56164',
    spelling: 'resilient',
    syllable: "rɪ'zɪliənt",
    meaningZhCn: 'adj. 有弹性的，适应力强的',
    exampleEnUs: 'Children are often more resilient than adults.',
    exampleZhCn: '孩子往往比成年人更有适应力。',
    unitName: 'Unit12',
  },
])

// 计算属性
const currentWord = computed(() => wordList.value[currentIndex.value])
const currentUnit = computed(() => dcyxProgramStore.currentUnit)
const totalWords = computed(() => wordList.value.length)
const studyProgress = computed(() =>
  Math.round(((currentIndex.value + 1) / totalWords.value) * 100),
)

// 进度条格式化
const progressFormat = (percentage: number) => `${percentage}%`

// 播放单词发音
const playWordSound = () => {
  if (!currentWord.value) return
  // TODO: 实现单词发音功能
  ElMessage.info('播放单词发音')
}

// 处理退出
const handleExit = () => {
  router.push('/work/word-training')
}

// 状态1：处理认识判断
const handleRecognition = (isKnown: boolean) => {
  if (isKnown) {
    currentState.value = 'confirmation'
  } else {
    currentState.value = 'reinforcement'
  }
  countdown.value = 5
}

// 状态2：处理确认认识
const handleConfirmation = (isConfirmed: boolean) => {
  if (isConfirmed) {
    knownWords.value++
  } else {
    unknownWords.value++
    currentState.value = 'reinforcement'
    return
  }
  nextWord()
}

// 状态3：处理加强学习
const handleReinforcement = () => {
  if (remainingStudyTimes.value > 0) {
    remainingStudyTimes.value--
    playWordSound()
  } else {
    nextWord()
  }
}

// 切换到下一个单词
const nextWord = () => {
  if (currentIndex.value < totalWords.value - 1) {
    currentIndex.value++
    currentState.value = 'recognition'
    remainingStudyTimes.value = 2
    countdown.value = 5
  } else {
    ElMessage.success('本单元学习完成！')
    handleExit()
  }
}

// 倒计时处理
let countdownTimer: number
const startCountdown = () => {
  countdownTimer = window.setInterval(() => {
    if (countdown.value > 0) {
      countdown.value--
    } else if (currentState.value === 'recognition') {
      handleRecognition(false)
    }
  }, 1000)
}

// 生命周期钩子
onMounted(() => {
  startCountdown()
  playWordSound() // 进入页面播放单词读音
})

onUnmounted(() => {
  clearInterval(countdownTimer)
})
</script>

<style lang="scss" scoped>
.word-training {
  height: 100%;
  background-color: var(--el-bg-color-page);
  padding: 20px;
  display: flex;
  flex-direction: column;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;

    .header-left {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .unit-name {
      font-size: 16px;
      color: var(--el-text-color-secondary);
    }
  }

  &__title {
    margin: 0;
    font-size: 24px;
    font-weight: 600;
    color: var(--el-text-color-primary);
  }

  &__content {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__footer {
    margin-top: 24px;
    padding: 16px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

    .progress-info {
      display: flex;
      justify-content: space-around;
      font-size: 14px;
      color: var(--el-text-color-regular);
    }
  }
}

.word-card {
  width: 100%;
  max-width: 600px;
  padding: 32px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  &__top {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-bottom: 24px;
  }

  &__word {
    font-size: 36px;
    font-weight: 600;
    color: var(--el-text-color-primary);
  }

  &__phonetic {
    font-size: 20px;
    color: var(--el-text-color-secondary);
  }

  &__progress {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 24px;

    .progress-text {
      font-size: 14px;
      color: var(--el-text-color-secondary);
    }
  }

  &__meaning {
    text-align: center;
    margin-bottom: 24px;

    .meaning-content {
      font-size: 24px;
      margin-bottom: 8px;
    }

    .part-of-speech {
      color: var(--el-text-color-secondary);
      margin-right: 8px;
    }

    .study-times {
      font-size: 16px;
      color: var(--el-color-primary);
      margin-top: 8px;
    }
  }

  &__example {
    text-align: center;
    font-size: 16px;
    color: var(--el-text-color-regular);
    font-style: italic;
    margin-bottom: 24px;

    .example-cn {
      margin-top: 8px;
      color: var(--el-text-color-secondary);
    }
  }

  &__actions {
    .countdown {
      text-align: center;
      font-size: 24px;
      color: var(--el-color-primary);
      margin-bottom: 16px;
    }

    .action-buttons {
      display: flex;
      justify-content: center;
      gap: 16px;

      .el-button {
        min-width: 120px;
      }
    }
  }
}

.sound-btn {
  font-size: 20px;
}
</style>
