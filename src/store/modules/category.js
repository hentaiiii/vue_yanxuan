import request from "@/utils/request"

const state = {
  categoryList: {},
}
const mutations = {
  getCateGoryListMutation(state, categoryList) {
    state.categoryList = categoryList
  },
}
const actions = {
  async getCateGoryAction({commit}, id) {
    if(id === -1) {
      id = ""
    }
    const res = await this.$api.category.getCategoryList(id)
    commit('getCateGoryListMutation', res.data)
  }
}
const getters = {
}
export default {
  state,
  mutations,
  actions,
  getters
}