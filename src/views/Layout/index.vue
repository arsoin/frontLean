<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue';
//触发获取导航列表的action
import {useCategoryStore} from '@/stores/category'
import { onMounted } from 'vue';

//创建实例对象
const categoryStore =  useCategoryStore()

//在onmounted中来调用他里面的action即getCategory()这个方法
onMounted(()=>{
  categoryStore.getCategory()
})
</script>

<template>
    <!-- 二级路由出口 -->
     <LayoutFixed/>
    <LayoutNav />
    <LayoutHeader />
    <RouterView />
    <LayoutFooter />
</template>





