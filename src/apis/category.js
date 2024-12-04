import HttpInstance from "@/utils/http";

export function getCategoryAPI(id){
  return HttpInstance({
    url :'/category',
    method : 'get',
    params:{
      id
    }
  })
}
