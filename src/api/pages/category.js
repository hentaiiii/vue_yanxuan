import request from '@/utils/request'

export default {
  // 获取左侧菜单列表 https://m.you.163.com/item/cateList.json?__timestamp=1648021443066&categoryId=
  getCategoryList(id) {
    return request.get(`/wy/item/cateList.json?__timestamp=${Date.now()}&categoryId=${id}`)
  }
}