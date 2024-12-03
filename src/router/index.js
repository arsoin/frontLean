// createRouter 创建 router实例对象
// createWebHistory 创建history模式的路由
import { createRouter, createWebHistory } from 'vue-router'
import login from '@/views/Login/index.vue'
import layout from '@/views/Layout/index.vue'
import home from '@/views/Home/index.vue'
import category from '@/views/Category/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component: layout,
      children:[{
        path:'',
        component:home
      },{
        path:'category',
        component:category
      }]
    },
    {
      path:'/login',
      component: login
    }
  ],
})

export default router
