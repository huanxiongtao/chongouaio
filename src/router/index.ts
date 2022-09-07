import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import TestPage from '../views/testPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: TestPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
