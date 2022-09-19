import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
// WebHistory历史模式, WebHashHistory哈希历史模式
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/maps',
    name: 'maps',
    component: () => import("../views/Maps.vue")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
