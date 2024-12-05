//引入初始化样式文件
import '@/styles/common.scss'

import { createApp, onMounted } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
//引入懒加载指定插件，并且注册
import {lazyPlugin} from '@/directives/index.js'
//引入全局组件插件
import { componentPlugin } from './components'


const app = createApp(App)
//注册持久化插件
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')



