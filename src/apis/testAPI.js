import HttpInstance from "@/utils/http";

export function getCategory(){
  return HttpInstance({
     url :'home/category/head'
  })
}


