const state = {
  homeList: {}
}
const mutations  = {
  getHomeListMutation(state, homeList) {
    state.homeList = homeList
  }
}

const actions  = {
  // 获取homelist
  async getHomeListAction({commit}) {
    const res = await this.$api.home.getHomeList()
    commit('getHomeListMutation', res.data.data)
  }
}

const getters  = {}
export default {
  state,
  mutations,
  actions,
  getters
}