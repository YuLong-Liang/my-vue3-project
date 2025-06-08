<template>
  <div class="word-training-outer">
    <el-row justify="center" align="middle" style="height: 100vh">
      <el-col :span="32">
        <el-card class="main-card">
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

            <!-- 单词卡片/听写卡片 -->
            <div class="word-training__content">
              <div class="word-card">
                <template v-if="!dictationActive">
                  <!-- 单词和音标 -->
                  <div class="word-card__top">
                    <div class="word-card__word">
                      {{ currentWord?.spelling }}
                    </div>
                    <div class="word-card__phonetic">
                      {{ currentWord?.syllable }}
                    </div>
                    <el-button
                      class="sound-btn"
                      circle
                      @click="playWordSound"
                      :icon="Microphone"
                    />
                  </div>

                  <!-- 进度条 -->
                  <div class="word-card__progress">
                    <el-progress
                      :percentage="studyProgress"
                      :format="progressFormat"
                    />
                    <span class="progress-text"
                      >{{ currentIndex + 1 }}/{{ totalWords }}</span
                    >
                  </div>

                  <!-- 词性和词义 -->
                  <div
                    v-if="currentState !== 'recognition'"
                    class="word-card__meaning"
                  >
                    <div class="meaning-content">
                      <span class="part-of-speech"
                        >{{ currentWord?.meaningZhCn.split('.')[0] }}.</span
                      >
                      <span class="meaning">{{
                        currentWord?.meaningZhCn.split('.')[1]
                      }}</span>
                    </div>
                    <div
                      v-if="currentState === 'reinforcement'"
                      class="study-times"
                    >
                      剩余学习次数: {{ remainingStudyTimes }}
                    </div>
                  </div>

                  <!-- 例句 -->
                  <div
                    v-if="currentState === 'reinforcement'"
                    class="word-card__example"
                  >
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
                </template>
                <template v-else>
                  <!-- 听写阶段内容 -->
                  <!-- 第一行：词性、词义 -->
                  <div class="word-card__meaning" style="margin-bottom: 16px">
                    <div class="meaning-content">
                      <span class="part-of-speech"
                        >{{
                          wordList[dictationIndex]?.meaningZhCn.split('.')[0]
                        }}.</span
                      >
                      <span class="meaning">{{
                        wordList[dictationIndex]?.meaningZhCn.split('.')[1]
                      }}</span>
                    </div>
                  </div>
                  <!-- 第二行：喇叭按钮、输入框 -->
                  <div
                    style="
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      gap: 16px;
                      margin-bottom: 16px;
                    "
                  >
                    <el-button
                      class="sound-btn"
                      circle
                      @click="playDictationSound"
                      :icon="Microphone"
                    />
                    <el-input
                      ref="dictationInputRef"
                      v-model="dictationInput"
                      placeholder="请输入单词拼写"
                      @keyup.enter="handleDictationEnter"
                      :status="dictationError ? 'error' : ''"
                      style="width: 240px"
                      autofocus
                    />
                    <el-icon
                      v-if="
                        !dictationError &&
                        dictationInput &&
                        dictationInput.trim().toLowerCase() ===
                          wordList[dictationIndex]?.spelling.toLowerCase() &&
                        !dictationReadyForNext
                      "
                      style="color: #67c23a; margin-left: 8px"
                      ><Check
                    /></el-icon>
                    <el-icon
                      v-if="dictationReadyForNext"
                      style="color: #409eff; margin-left: 8px; cursor: pointer"
                      @click="nextDictationWord"
                      ><ArrowRight
                    /></el-icon>
                  </div>
                  <!-- 第三行：拼写错误时显示答案，拼写正确时显示音标 -->
                  <div
                    v-if="dictationShowAnswer || dictationReadyForNext"
                    style="text-align: center; margin-bottom: 16px"
                  >
                    <template v-if="dictationShowAnswer">
                      <span
                        v-for="(ch, idx) in wordList[
                          dictationIndex
                        ]?.spelling.split('')"
                        :key="idx"
                        :style="{
                          color: dictationErrorMap[idx] ? '#f56c6c' : '#303133',
                          fontWeight: dictationErrorMap[idx]
                            ? 'bold'
                            : 'normal',
                          fontSize: '22px',
                          marginRight: '2px',
                        }"
                      >
                        {{ ch }}
                      </span>
                    </template>
                    <template v-else-if="dictationReadyForNext">
                      <span style="font-size: 22px; color: #409eff">{{
                        wordList[dictationIndex]?.syllable
                      }}</span>
                    </template>
                  </div>
                </template>
              </div>
            </div>

            <!-- 底部进度信息/听写进度 -->
            <div class="word-training__footer">
              <div class="progress-info" v-if="!dictationActive">
                <span>生词数: {{ unknownWords }}</span>
                <span>熟词数: {{ knownWords }}</span>
                <span>总词数: {{ totalWords }}</span>
                <span>当前进度: {{ currentIndex + 1 }}/{{ totalWords }}</span>
              </div>
              <div class="progress-info" v-else>
                <span>有效时长: --</span>
                <span>已拼写通过: {{ dictationCorrectCount }}</span>
                <span>总数: {{ dictationTotal }}</span>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick, watch } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import {
  Back,
  Microphone,
  CircleCheckFilled,
  CircleCloseFilled,
  Check,
  Close,
  ArrowRight,
} from '@element-plus/icons-vue'
import { useDcyxProgramStore } from '@/store'

// 状态类型定义
type StudyState = 'recognition' | 'confirmation' | 'reinforcement' | 'dictation'

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
const dictationIndex = ref(0) // 听写阶段当前单词索引
const dictationCorrectCount = ref(0) // 听写通过数
const dictationInput = ref('') // 听写输入内容
const dictationError = ref(false) // 是否拼写错误
const dictationShowAnswer = ref(false) // 是否显示答案
const dictationErrorMap = ref<boolean[]>([]) // 标记每个字母是否错误
const dictationTotal = computed(() => wordList.value.length)
const dictationActive = computed(() => currentState.value === 'dictation')
const countdown = ref(5)
const currentIndex = ref(0)
const remainingStudyTimes = ref(2)
const knownWords = ref(0)
const unknownWords = ref(0)
const dictationReadyForNext = ref(false) // 拼写正确后等待进入下一个

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
const audioUrl = '/mp3s/good.mp3'
const playWordSound = () => {
  if ((window as any).wordAudio) {
    ;(window as any).wordAudio.pause()
    ;(window as any).wordAudio.currentTime = 0
  }
  ;(window as any).wordAudio = new window.Audio(audioUrl)
  ;((window as any).wordAudio as HTMLAudioElement).play()
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
    playWordSound()
  } else {
    // 进入听写阶段
    currentState.value = 'dictation'
    dictationIndex.value = 0
    dictationCorrectCount.value = 0
    dictationInput.value = ''
    dictationError.value = false
    dictationShowAnswer.value = false
    dictationErrorMap.value = []
    dictationReadyForNext.value = false
    playWordSound()
  }
}

// 听写阶段：播放当前单词发音
const playDictationSound = () => {
  playWordSound()
}

// 听写阶段：进入下一个单词（拼写正确后，回车或点右箭头都调用）
const nextDictationWord = () => {
  if (dictationIndex.value < wordList.value.length - 1) {
    dictationIndex.value++
    dictationInput.value = ''
    dictationError.value = false
    dictationShowAnswer.value = false
    dictationErrorMap.value = []
    dictationReadyForNext.value = false
    playDictationSound()
  } else {
    ElMessage.success('听写完成！')
    handleExit()
  }
}

// 听写阶段：输入框回车校验
const handleDictationEnter = () => {
  if (dictationReadyForNext.value) {
    nextDictationWord()
    return
  }
  const answer = wordList.value[dictationIndex.value].spelling
  if (dictationInput.value.trim().toLowerCase() === answer.toLowerCase()) {
    dictationError.value = false
    dictationShowAnswer.value = false
    dictationCorrectCount.value++
    dictationReadyForNext.value = true
    playDictationSound() // 拼写正确时再播放一次
  } else {
    dictationError.value = true
    dictationShowAnswer.value = true
    // 生成错误高亮map
    const inputArr = dictationInput.value.trim().split('')
    const answerArr = answer.split('')
    const errorArr: boolean[] = []
    for (let i = 0; i < answerArr.length; i++) {
      errorArr.push(inputArr[i]?.toLowerCase() !== answerArr[i].toLowerCase())
    }
    dictationErrorMap.value = errorArr
    playDictationSound() // 拼写错误时再播放一次
  }
}

// 听写阶段：输入框自动聚焦
const dictationInputRef = ref<HTMLInputElement | null>(null)
const focusDictationInput = () => {
  nextTick(() => {
    dictationInputRef.value?.focus()
  })
}
watch(
  () => currentState.value,
  (val) => {
    if (val === 'dictation') {
      focusDictationInput()
    }
  },
)

// 倒计时处理（仅用于记忆阶段）
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

// 快捷键处理函数
const handleKeydown = (e: KeyboardEvent) => {
  // 只在记忆阶段处理快捷键
  if (dictationActive.value) return
  if (e.key === 'ArrowRight') {
    if (currentState.value === 'recognition') {
      handleRecognition(true)
    } else if (currentState.value === 'confirmation') {
      handleConfirmation(true)
    } else if (currentState.value === 'reinforcement') {
      handleReinforcement()
    }
  } else if (e.key === 'ArrowLeft') {
    if (currentState.value === 'recognition') {
      handleRecognition(false)
    } else if (currentState.value === 'confirmation') {
      handleConfirmation(false)
    }
    // reinforcement 阶段没有左键操作
  }
}

// 生命周期钩子
onMounted(() => {
  if (!dictationActive.value) {
    startCountdown()
  }
  playWordSound() // 进入页面播放单词读音
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  if (!dictationActive.value) {
    clearInterval(countdownTimer)
  }
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<style lang="scss" scoped>
.word-training-outer {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--el-bg-color-page);
}

.main-card {
  width: 66vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
}

.word-training {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
}

.word-training__header {
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

.word-training__title {
  margin: 0;
  font-size: 24px;
  font-weight: 600;
  color: var(--el-text-color-primary);
}

.word-training__content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.word-training__footer {
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
