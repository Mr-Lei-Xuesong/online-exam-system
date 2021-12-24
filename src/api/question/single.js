import request from '@/api/request'

/**
 * 查询单选题列表
 * @returns 
 */
export function apiQuerySingleList (params) {
  return request({
    url: '/queryAllSingle',
    method: 'GET',
    params: params
  })
}

/**
 * 查询单选题详情
 * @param {Number} id 单选题id
 */ 
export function apiQuerySingleDetail (id) {
  return request({
    url: `/querySingle/${id}`,
    method: 'GET'
  })
}

/**
 * 新增单选题
 * @param {*} data
 * @returns 
 */
export function apiAddSingle (data) {
  return request({
    url: '/addSingle',
    method: 'POST',
    data: data
  })
}

/**
 * 删除单选题
 * @param {*} id
 * @returns 
 */
export function apiDeleteSingle (id) {
  return request({
    url: `/deleteSingle/${id}`,
    method: 'DELETE'
  })
}

/**
 * 新增单选题
 * @param {*} data
 * @returns 
 */
export function apiUpdateSingle (data) {
  return request({
    url: '/updateSingle',
    method: 'PUT',
    data: data
  })
}
