import request from '@/utils/request'

const PROGRAM_BASE_URL = '/api/v1/program'

const DCYX_PROGRAM_API = {
  // getProgramBySeriesId
  getProgramBySeriesId: (seriesId: string) => {
    return request<any, ProgramItem[]>({
      url: `${PROGRAM_BASE_URL}/getProgramBySeriesId/${seriesId}`,
      method: 'get',
    })
  },
}
export default DCYX_PROGRAM_API

export interface CurrentProgram {
  seriesId: string
  seriesName: string
  parentSeriesId: string
  parentSeriesName: string
  programId: string
  programName: string
  programWordNumber: string
  programStudyWordNumber: string
  studyId: string
  unitName: string
}

export interface ProgramItem {
  id: string
  seriesId: string
  name: string
  totalWords: string
  expLanguage: string
  nameEnUs: string
  nameZhCn: string
  nameZhBig: string
  disporder: string
  remark: string
  type: string
  createUser: string
  createTime: string
  updateTime: string
  updateUser: string
  status: string
  studyNumber: string
  percent: number
  percentStr: string
}
