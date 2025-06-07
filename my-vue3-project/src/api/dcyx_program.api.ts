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
  // getUnitsInfoByProgram
  getUnitsInfoByProgram: (
    parentId: string,
    seriesId: string,
    programId: string,
  ) => {
    return request<any, UnitItem[]>({
      url: `${PROGRAM_BASE_URL}/unit/getUnitsInfoByProgram/${parentId}/${seriesId}/${programId}`,
      method: 'get',
    })
  },
  // countWordsByUnit
  countWordsByUnit: (seriesId: string, programId: string, unitName: string) => {
    return request<any, UnitCountWordItem>({
      url: `${PROGRAM_BASE_URL}/word/countWordsByUnit/${seriesId}/${programId}/${unitName}`,
      method: 'get',
    })
  },
}

export default DCYX_PROGRAM_API

export interface UnitCountWordItem {
  unitTotal: string
  studyNumForZnjy: number
  studyNumForZnmx: number
  studyNumForZntx: number
  testTimeForZnjy: string
  testTimeForZnmx: string
  testTimeForZntx: string
  restudyNumForZnjy: number
  restudyNumForZnmx: number
  restudyNumForZntx: number
  isEndZnjy: string
  isEndZntx: string
  isEndZnmx: string
}

export interface UnitItem {
  id: string
  name: string
  score: number | null
  time: number | null
  isEnd: string
}

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
