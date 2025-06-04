import request from '@/utils/request'

const SERIES_BASE_URL = '/api/v1/series'

const DCYX_SERIES_API = {
  getSeriesByUser: () => {
    return request<any, TabItem[]>({
      url: `${SERIES_BASE_URL}/getSeriesByUser`,
      method: 'get',
    })
  },
  getSeriesByParentId: (id: number) => {
    return request<any, SerieItem[]>({
      url: `${SERIES_BASE_URL}/getSeriesByParentId/${id}`,
      method: 'get',
    })
  },
}
export default DCYX_SERIES_API

export interface TabItem {
  id: string
  disporder: string
  nameEnUs: string
  nameZhCn: string
  nameZhBig: string
  parentId: string
  type: string
  showFree: string
  content: string
  createUser: string
  createTime: string
  updateTime: string
  updateUser: string
  status: string
  picture: string
}

export interface SerieItem {
  id: string
  disporder: string
  nameEnUs: string
  nameZhCn: string
  nameZhBig: string
  parentId: string
  type: string
  showFree: string
  content: string
  createUser: string
  createTime: string
  updateTime: string
  updateUser: string
  status: string
  picture: string
}
