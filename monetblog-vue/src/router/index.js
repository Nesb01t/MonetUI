import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
// WebHistory历史模式, WebHashHistory哈希历史模式
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/', // 路由地址
    name: 'home', // 路由名字
    component: Home // 路由vue组件
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue'),
    children: [
      {
        path: '/maps',
        name: 'maps',
        component: () => import("../views/Maps.vue")
      }
    ]
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

// 暴露路由对象
export default router
