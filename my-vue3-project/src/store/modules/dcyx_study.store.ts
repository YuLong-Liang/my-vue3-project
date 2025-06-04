import { defineStore } from 'pinia'
import { ref } from 'vue'
import DCYX_STUDY_API, {
  CurrentProgram,
  TodayTimeRecord,
} from '@/api/dcyx_study.api'
import DCYX_PROGRAM_API, { ProgramInfo } from '@/api/dcyx_program.api'
import { store } from '@/store'
import { useDcyxSeriesStore } from '@/store'

export const useDcyxStudyStore = defineStore('dcyx_study', () => {
  const dcyxSeriesStore = useDcyxSeriesStore()

  const todayReport = useStorage<TodayTimeRecord>(
    'todayReport',
    {} as TodayTimeRecord,
  )

  const currentProgram = useStorage<CurrentProgram>(
    'currentProgram',
    {} as CurrentProgram,
  )

  const fetchTodayReport = () => {
    return new Promise((resolve, reject) => {
      DCYX_STUDY_API.getTodayTimeRecord()
        .then((res) => {
          todayReport.value = res
          resolve(res)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  const fetchCurrentProgram = () => {
    return new Promise((resolve, reject) => {
      DCYX_STUDY_API.getCurrentProgram()
        .then((res) => {
          currentProgram.value = res
          dcyxSeriesStore.currentSeriesParentId = Number(res.parentSeriesId)
          dcyxSeriesStore.currentSeriesId = Number(res.seriesId)
          resolve(res)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  // getProgramBySeriesId
  const fetchProgramBySeriesId = () => {
    return new Promise((resolve, reject) => {
      DCYX_PROGRAM_API.getProgramBySeriesId(
        dcyxSeriesStore.currentSeriesId.toString(),
      )
        .then((res) => {
          resolve(res)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  return {
    todayReport,
    currentProgram,
    fetchTodayReport,
    fetchCurrentProgram,
    fetchProgramBySeriesId,
  }
})

export function useDcyxStudyStoreHook() {
  return useDcyxStudyStore(store)
}
