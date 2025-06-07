import DCYX_STUDY_API, { CurrentProgram } from '@/api/dcyx_study.api'
import DCYX_PROGRAM_API, {
  UnitCountWordItem,
  UnitItem,
  type ProgramItem,
} from '@/api/dcyx_program.api'
import { store } from '@/store'
export const useDcyxProgramStore = defineStore('dcyx_program', () => {
  const currentProgram = useStorage<CurrentProgram>(
    'currentProgram',
    {} as CurrentProgram,
  )

  const currentUnit = useStorage<UnitItem>('currentUnit', {} as UnitItem)

  const loading = ref(false)

  const currentUnitCountWord = useStorage<UnitCountWordItem>(
    'currentUnitCountWord',
    {} as UnitCountWordItem,
  )

  /**
   * 获取当前学习项目
   * @returns {CurrentProgram}
   */
  function getCurrentProgram() {
    loading.value = true
    return new Promise<CurrentProgram>((resolve, reject) => {
      DCYX_STUDY_API.getCurrentProgram()
        .then((res) => {
          currentProgram.value = res
          resolve(res)
        })
        .catch((error) => {
          reject(error)
        })
        .finally(() => {
          loading.value = false
        })
    })
  }

  /**
   * 获取系列下的学习项目
   * @param {string} seriesId 系列ID
   * @returns {ProgramItem[]} 学习项目列表
   */
  function getProgramBySeriesId(seriesId: string) {
    loading.value = true
    return new Promise<ProgramItem[]>((resolve, reject) => {
      DCYX_PROGRAM_API.getProgramBySeriesId(seriesId)
        .then((res) => {
          resolve(res)
        })
        .catch((error) => {
          reject(error)
        })
        .finally(() => {
          loading.value = false
        })
    })
  }
  /**
   * 获取单元列表
   * @param {string} parentId 父级ID
   * @param {string} seriesId 系列ID
   * @param {string} programId 学习项目ID
   * @returns {UnitItem[]} 单元列表
   */
  function getUnitsInfoByProgram(
    parentId: string,
    seriesId: string,
    programId: string,
  ) {
    loading.value = true
    return new Promise<UnitItem[]>((resolve, reject) => {
      DCYX_PROGRAM_API.getUnitsInfoByProgram(parentId, seriesId, programId)
        .then((res) => {
          resolve(res)
        })
        .catch((error) => {
          reject(error)
        })
        .finally(() => {
          loading.value = false
        })
    })
  }

  /**
   * 获取单元单词数量
   * @param {string} seriesId 系列ID
   * @param {string} programId 学习项目ID
   * @param {string} unitName 单元名称
   * @returns {UnitCountWordItem} 单元单词数量
   */
  function countWordsByUnit(
    seriesId: string,
    programId: string,
    unitName: string,
  ) {
    loading.value = true
    return new Promise<UnitCountWordItem>((resolve, reject) => {
      DCYX_PROGRAM_API.countWordsByUnit(seriesId, programId, unitName)
        .then((res) => {
          resolve(res)
        })
        .catch((error) => {
          reject(error)
        })
        .finally(() => {
          loading.value = false
        })
    })
  }

  return {
    currentProgram,
    currentUnit,
    currentUnitCountWord,
    loading,
    getCurrentProgram,
    getProgramBySeriesId,
    getUnitsInfoByProgram,
    countWordsByUnit,
  }
})

export function useDcyxProgramStoreHook() {
  return useDcyxProgramStore(store)
}
