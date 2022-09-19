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
    children:[
      {
        path: '/zs-bis',
        name: 'zs-bis',
        component: () => import("../views/Terraria/zs-bis.vue")
      },
      {
        path: '/fs-bis',
        name: 'fs-bis',
        component: () => import("../views/Terraria/fs-bis.vue")
      },
      {
        path: '/ss-bis',
        name: 'ss-bis',
        component: () => import("../views/Terraria/ss-bis.vue")
      },
      {
        path: '/zhs-bis',
        name: 'zhs-bis',
        component: () => import("../views/Terraria/zhs-bis.vue")
      },
      
    ]
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
