import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api'
import home from './modules/home'
import category from './modules/category'
Vue.use(Vuex)


const store = new Vuex.Store({
  modules: {
    home,
    category
  }
})
store.$api = api
export default store