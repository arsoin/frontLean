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
