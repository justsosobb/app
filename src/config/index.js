// 定义请求话题列表时的默认数据
export const newsParams = {
  channel: '头条',
  num: 20,
  start: 0,
  appkey: '65f1ecc2db607294081f1843fc25eb6c'
}
const API_PROXY = 'https://bird.ioliu.cn/v1/?url='
// 定义数据请求新闻的的API url地址
export const APIRootUrl = API_PROXY + 'https://way.jd.com/jisuapi/get'
