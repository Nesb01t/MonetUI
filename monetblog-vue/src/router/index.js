import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Layout from '../views/Layout/Layout.vue'

const routes = [
  {
    path: '/', // 路由地址
    name: 'layout', // 路由名字
    component: Layout, // 路由vue组件
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
