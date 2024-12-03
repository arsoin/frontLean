import HttpInstance from "@/utils/http";
export function getCategoryAPI(){
  return HttpInstance({
    method : 'get',
    url:'/home/category/head'
  })
}
