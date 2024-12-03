import HttpInstance from "@/utils/http";


//获取banner
export function getBannerAPI(){
  return HttpInstance({
    method:'get',
    url :'/home/banner'
  })
}
