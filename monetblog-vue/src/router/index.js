import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/terraria',
    name: 'terraria',
    component: () => import("../views/Terraria.vue"),
  },
  {
    path: '/wowmaps',
    name: 'wowmaps',
    component: () => import("../views/WowMaps.vue"),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
