import HttpInstance from "@/utils/http";

export const getDetail = (id)=>{
  return HttpInstance({
    url:'/goods',
    method:'get',
    params:{
      id
    }
  })
}
