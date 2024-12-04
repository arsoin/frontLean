<script setup>
import {getCategoryFilterAPI} from '@/apis/category'
import { onMounted ,ref} from 'vue';
import { useRoute } from 'vue-router';
import {getSubCategoryAPI} from '@/apis/category'
import GoodsItem from '../Home/components/GoodsItem.vue';

//获取面包屑导航数据
const categoryDate = ref({})
const route =  useRoute()
const getCateDate = async()=>{
  const res = await  getCategoryFilterAPI(route.params.id)
  categoryDate.value = res.result
}
onMounted(()=>{
  getCateDate()
})

//获取数据渲染
const goodList = ref([])
//准备传给后端的参数
const reqDate = ref({
  categoryId :route.params.id,
  page:1,
  pageSize :20,
  sortField:'publishTime'
})
const getGoodList = async()=>{
  const resp = await getSubCategoryAPI(reqDate.value)
  goodList.value = resp.result.items
}

onMounted(()=>{
  getGoodList()
})
const disabled = ref(false)
//tab 切换
const tabChange = ()=>{
  reqDate.value.page = 1
  console.log('tab切换了',reqDate.value.sortField);
  getGoodList()
  disabled = false
}

//加载更多
const load = async()=>{
  // console.log('加载更多数据')
  //获取下一页数据
  reqDate.value.page++
  //新老数据拼接
  //新数据
  const res = await getSubCategoryAPI(reqDate.value)
  //拼接
  goodList.value = [...goodList.value,...res.result.items]
  /*
    ... 是 ES6 引入的展开语法，用于将数组中的元素逐个取出。
  [...goodList.value, ...res.result.items]：
  ...goodList.value：将 goodList.value 数组中的所有元素展开。
  ...res.result.items：将 res.result.items 数组中的所有元素展开。
  两个展开结果被拼接到一个新的数组中。
  */
    //加载完毕，停止监听
  if(res.result.items.length === 0){
    disabled.value = true
  }
}




</script>

<template>
  <div class="container ">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${categoryDate.parentId}` }">{{ categoryDate.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ categoryDate.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <!-- 这里v-model和name 双向绑定，这边name的数据可以直接传到这里面去-->
      <el-tabs v-model="reqDate.sortField" @tab-change="tabChange" :infinite-scroll-disabled="disabled">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body" v-infinite-scroll="load">
         <!-- 商品列表-->
        <GoodsItem v-for="goods in goodList" :goods="goods" :key="goods.id"/>
      </div>
    </div>
  </div>

</template>



<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }


}
</style>
