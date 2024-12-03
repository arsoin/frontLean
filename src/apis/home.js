import HttpInstance from "@/utils/http";


//获取banner
export function getBannerAPI(){
  return HttpInstance({
    method:'get',
    url :'/home/banner'
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
