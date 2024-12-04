import HttpInstance from "@/utils/http";


//获取banner
//之前没有参数，是因为在首页，现在需要分类页也能轮播，因此需要加上一些参数
export function getBannerAPI(params = {}){
  // 默认为1  商品分类为2  , 这里的传参方式就是 js中的 对象解构
  const {distibutionSite = '1'} = params
  return HttpInstance({
    method:'get',
    url :'/home/banner',
    params :{
      distibutionSite
    }
  })
}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const findNewAPI = () => {
  return HttpInstance({
    url:'/home/new',
    method : 'get'
  })
}

/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const getHotAPI = () => {
  return HttpInstance({
    url :'home/hot',
    method : 'get'
  })
}

/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
  return HttpInstance({
    url: '/home/goods',
    method : 'get'
  })
}
