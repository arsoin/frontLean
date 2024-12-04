<script setup>
import {getCategoryAPI} from '@/apis/category'
import { onMounted ,onUpdated,ref, watch} from 'vue';
import { useRoute } from 'vue-router';

//获取数据
const categoryDate = ref({})
//通过路由来获取到参数
const route = useRoute()
//获取路由参数
const getCategory = async(id)=>{
  const res = await getCategoryAPI(route.params.id)
  categoryDate.value = res.result
}
// onMounted(()=>{
//   getCategory(route.params.id)
// })

//这里用 onupdate或者 watch 都可以，但是不能用onMonted因为组件已经存在了
// onUpdated(()=>{
//   getCategory(route.params.id)
// })

//或者这里用watch
watch(route,()=>{
  getCategory()
})

</script>

<template>
  <div class="top-category">
    <div class="container m-top-20">
      <!-- 面包屑 -->
      <div class="bread-container">
        <!-- 面包屑中间的分隔符    >   这个符号-->
        <el-breadcrumb separator=">">
          <!-- 面包屑中的每一个导航页 比如：  什么 > 什么 -->
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{ categoryDate.name }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
.top-category {
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }

  .sub-list {
    margin-top: 20px;
    background-color: #fff;

    ul {
      display: flex;
      padding: 0 32px;
      flex-wrap: wrap;

      li {
        width: 168px;
        height: 160px;


        a {
          text-align: center;
          display: block;
          font-size: 16px;

          img {
            width: 100px;
            height: 100px;
          }

          p {
            line-height: 40px;
          }

          &:hover {
            color: $xtxColor;
          }
        }
      }
    }
  }

  .ref-goods {
    background-color: #fff;
    margin-top: 20px;
    position: relative;

    .head {
      .xtx-more {
        position: absolute;
        top: 20px;
        right: 20px;
      }

      .tag {
        text-align: center;
        color: #999;
        font-size: 20px;
        position: relative;
        top: -20px;
      }
    }

    .body {
      display: flex;
      justify-content: space-around;
      padding: 0 40px 30px;
    }
  }

  .bread-container {
    padding: 25px 0;
  }
}
</style>



