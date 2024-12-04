// createRouter 创建 router实例对象
// createWebHistory 创建history模式的路由
import { createRouter, createWebHistory } from 'vue-router'
import login from '@/views/Login/index.vue'
import layout from '@/views/Layout/index.vue'
import home from '@/views/Home/index.vue'
import category from '@/views/Category/index.vue'
import subCategory from '@/views/SubCategory/index.vue'
import Detail from '@/views/Detail/index.vue'

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
        path:'category/:id',
        component:category
      },{
        path:'category/sub/:id',
        component:subCategory
      },
      {
        path:'detail/:id',
        component:Detail
      },
    ]
    },
    {
      path:'/login',
      component: login
    }
  ],
  //路由行为的配置项
  scrollBehavior(){
    return {
      top:0
    }
  }
})

export default router
