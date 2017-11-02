import axios from 'axios'
import { newsParams, APIRootUrl } from '@/config/index'

export function getNewsList (params) {
  let path = APIRootUrl
  let paramsData = Object.assign({}, newsParams, params)
  return axios.get(path, {
    params: paramsData
  })
}
export function getDetail (params) {
  let path = APIRootUrl
  let paramsData = Object.assign({}, newsParams, params)
  return axios.get(path, {
    params: paramsData
  })
}
