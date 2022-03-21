import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../pages/Home')
const Category = () => import('../pages/Category')
const Personal = () => import('../pages/Personal')
const Buy = () => import('../pages/Buy')
const Cart = () => import('../pages/Cart')

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {path: '/home', component: Home},
    {path: '/category', component: Category},
    {path: '/personal', component: Personal},
    {path: '/buy', component: Buy},
    {path: '/cart', component: Cart},
    { path: '/', redirect: '/home' }
  ]
})

export default router