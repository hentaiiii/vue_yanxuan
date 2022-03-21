import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import api from '@/api'
Vue.use(Vuex)


const store = new Vuex.Store({
  modules: {
    home
  }
})
store.$api = api
export default store