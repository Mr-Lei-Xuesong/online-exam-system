import request from '@/api/request'

/**
 * 查询试卷列表
 * @returns 
 */
export function apiQueryExamList (params) {
  return request({
    url: '/queryAllExam',
    method: 'GET',
    params: params
  })
}

/**
 * 查询试卷详情
 * @param {Number} id 试卷id
 */
export function apiQueryExamDetail (id) {
  return request({
    url: `/queryExamPaper/${id}`,
    method: 'GET'
  })
}

/**
 * 新增试卷
 * @param {*} data
 * @returns 
 */
export function apiAddExam (data) {
  return request({
    url: '/addExamInfo',
    method: 'POST',
    data: data
  })
}

/**
 * 删除试卷
 * @param {*} id
 * @returns 
 */
export function apiDeleteMultipe (id) {
  return request({
    url: `/deleteExam/${id}`,
    method: 'DELETE'
  })
}

/**
 * 修改试卷
 * @param {*} data
 * @returns 
 */
export function apiUpdateExam (data) {
  return request({
    url: '/updateExam',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'PUT',
    data: data
  })
}
