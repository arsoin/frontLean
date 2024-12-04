//封装分类数据相关的业务代码
import {getCategoryAPI} from '@/apis/category'
import { onMounted ,onUpdated,ref, watch} from 'vue';
import { useRoute,onBeforeRouteUpdate } from 'vue-router';

export function useCategory(){
  //获取数据
  const categoryDate = ref({})
  //通过路由来获取到参数
  const route = useRoute()
  //获取路由参数
  const getCategory = async(id = route.params.id)=>{
    const res = await getCategoryAPI(id)
    categoryDate.value = res.result
  }
  // onMounted(()=>{
  //   getCategory(route.params.id)
  // })

  //这里用 onupdate或者 watch 都可以，但是不能用onMonted因为组件已经存在了
  // onUpdated(()=>{
  //   getCategory(route.params.id)
  // })

  //或者用onBeforeRouteUpdate
  //我们期望路由参数变化的时候，可以吧分类数据接口重新发送
  onBeforeRouteUpdate((to)=>{
    console.log('路由变化了')
    //但是此时的参数害是之前的路由参数
    getCategory(to.params.id)
  })

  //或者这里用watch
  // watch(route,()=>{
  //   getCategory()
  // })
  return {
    categoryDate,
  }
}
