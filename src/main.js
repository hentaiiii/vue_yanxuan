import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import '@/static/font/font.css' // 引入字体样式
import '@/utils/rem' // rem适配
import api from '@/api/index' 
import store from '@/store'
import '@/utils/vant'
Vue.prototype.$api = api // 挂载接口函数

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
