//这个是本地购物车的pinia管理
import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useCartStore =  defineStore('cart',()=>{
  //数据列表 state
  const cartList = ref([])

  //定义action-addCart
  const addCart = (goods)=>{
    //逻辑 如果已经在购物车了，那么count + 1 即可
    //如果没有添加，那么push到购物车
    //通过匹配传递过来的商品的skuid在cartlist中能不能找到，找到的话，就是添加过的
    const item =  cartList.value.find((item)=> goods.skuId === item.skuId)
    // console.log(item)
    if(item){
      //找到了,这个item是个对象
      item.count += goods.count
    }else{
      //没有的话就往 购物车里面加
      cartList.value.push(goods)
    }
    console.log(cartList.value);
  }
  //
  return{
    cartList,
    addCart,
  }
},{
  persist:true
})
