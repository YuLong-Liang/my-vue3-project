// import { defineStore } from 'pinia'
import { ref } from 'vue'
import DCYX_SERIES_API, { SerieItem, TabItem } from '@/api/dcyx_series.api'
import { store } from '@/store'

export const useDcyxSeriesStore = defineStore('dcyx_series', () => {
  // 学期列表
  const tabList = useStorage<TabItem[]>('tabList', [])
  // 系列列表
  const serieList = ref<SerieItem[]>([])

  const currentSeriesId = ref<number>(0)
  const currentSeriesParentId = ref<number>(0)

  // 获取主页顶部的学期数据
  const getSeriesByUser = async () => {
    return new Promise<TabItem[]>((resolve, reject) => {
      DCYX_SERIES_API.getSeriesByUser()
        .then((res) => {
          tabList.value = res || []
          resolve(res)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  const getSeriesByParentId = async (id: number) => {
    return new Promise<SerieItem[]>((resolve, reject) => {
      DCYX_SERIES_API.getSeriesByParentId(id)
        .then((res) => {
          serieList.value = res || []
          resolve(res)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  return {
    tabList,
    serieList,
    currentSeriesParentId,
    currentSeriesId,
    getSeriesByUser,
    getSeriesByParentId,
  }
})

export function useDcyxSeriesStoreHook() {
  return useDcyxSeriesStore(store)
}
