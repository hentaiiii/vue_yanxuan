import request from '@/utils/request'

export default {
  getBuyNavWap() {
    // 值得买导航列表
    return request.get('/wy/topic/v1/know/navWap.json')
  },
  // 值得买瀑布流数据
  getBuyMenu(page) {
    return request.get(`/wy/topic/v1/find/recAuto.json?page=${page}&size=2&exceptIds=`)
  }
}