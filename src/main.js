import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import '@/static/font/font.css' // 引入字体样式
import '@/utils/rem' // rem适配
import api from '@/api/index' 
import store from '@/store'
import '@/utils/vant'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.min.css'
import VueLazyLoad from 'vue-lazyload' // 图片的懒加载

Vue.use(VueAwesomeSwiper)
Vue.prototype.$api = api // 挂载接口函数
Vue.use(VueLazyLoad,{
  loading:require('../public/images/loading.gif')  
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
