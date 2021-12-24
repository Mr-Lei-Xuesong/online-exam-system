import request from '@/api/request'

/**
 * 查询多选题列表
 * @returns 
 */
export function apiQueryMultipleList (params) {
  return request({
    url: '/queryAllMultiple',
    method: 'GET',
    params: params
  })
}

/**
 * 查询多选题详情
 * @param {Number} id 多选题id
 */
export function apiQueryMultipleDetail (id) {
  return request({
    url: `/queryMultiple/${id}`,
    method: 'GET'
  })
}

/**
 * 新增多选题
 * @param {*} data
 * @returns 
 */
export function apiAddMultiple (data) {
  return request({
    url: '/addMultiple',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'POST',
    data: data
  })
}

/**
 * 删除多选题
 * @param {*} id
 * @returns 
 */
export function apiDeleteMultipe (id) {
  return request({
    url: `/deleteMultiple/${id}`,
    method: 'DELETE'
  })
}

/**
 * 修改多选题
 * @param {*} data
 * @returns 
 */
export function apiUpdateMultiple (data) {
  return request({
    url: '/updateMultiple',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'PUT',
    data: data
  })
}
