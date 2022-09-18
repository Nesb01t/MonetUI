import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Maps',
    name: 'Maps',
    component: () => import("../views/Maps.vue")
  },
  {
    path: '/Terraria',
    name: 'Terraria',
    component: () => import("../views/Terraria.vue")
  }
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router