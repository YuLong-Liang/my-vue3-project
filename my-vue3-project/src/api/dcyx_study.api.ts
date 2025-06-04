import request from '@/utils/request'
import { ProgramItem } from './dcyx_program.api'

const STUDY_BASE_URL = '/api/v1/study'

const DCYX_STUDY_API = {
  getTodayTimeRecord: () => {
    return request<any, TodayTimeRecord>({
      url: `${STUDY_BASE_URL}/time/getTodayTimeRecord`,
      method: 'get',
    })
  },
  getCurrentProgram: () => {
    return request<any, CurrentProgram>({
      url: `${STUDY_BASE_URL}/state/getCurrentProgram`,
      method: 'get',
    })
  },
}

export default DCYX_STUDY_API

export interface TodayTimeRecord {
  time1: string
  time2: string
  efficiency: string
  seconds: string
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
