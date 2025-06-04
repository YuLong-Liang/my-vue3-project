import DCYX_STUDY_API, { CurrentProgram } from '@/api/dcyx_study.api'
import DCYX_PROGRAM_API, { type ProgramItem } from '@/api/dcyx_program.api'
import { store } from '@/store'
export const useDcyxProgramStore = defineStore('dcyx_program', () => {
  const currentProgram = useStorage<CurrentProgram>(
    'currentProgram',
    {} as CurrentProgram,
  )
  const loading = ref(false)

  const getCurrentProgram = () => {
    loading.value = true
    return new Promise((resolve, reject) => {
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

  const getProgramBySeriesId = (seriesId: string) => {
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

  return {
    currentProgram,
    loading,
    getCurrentProgram,
    getProgramBySeriesId,
  }
})

export function useDcyxProgramStoreHook() {
  return useDcyxProgramStore(store)
}
