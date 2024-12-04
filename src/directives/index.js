//定义懒加载插件，然后只需要在main.js中引入即可

import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin = {
  install (app){
    //懒加载逻辑
    //使用全局指令，全局指令基本都这么写
    app.directive('img-lazy', {
      mounted(el, binding) {
        // 创建 IntersectionObserver 实例
        const {stop} =  useIntersectionObserver(
          el,
          ([entry]) => {
            if(entry.isIntersecting){
              el.src = binding.value
              //调用stop停止方法，让他加载完成后就停止监听
              stop()
            }
          },
        )
      },
    });
  }
}
