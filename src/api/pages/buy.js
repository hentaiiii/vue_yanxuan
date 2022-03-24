import request from '@/utils/request'

export default {
  getBuyNavWap() {
    // 值得买导航列表
    return request.get('/wy/topic/v1/know/navWap.json')
  }
}