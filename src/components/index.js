//通过插件的方式，吧components中的所有组件都进行全局注册
import ImageView from './ImageView/index.vue'
import Sku from './XtxSku/index.vue'

export const componentPlugin = {
  install(app){
    //用 app.component(组件名字，组件对象)
    app.component('ImageView',ImageView)
    app.component('XtxSku',Sku)
  }
}
