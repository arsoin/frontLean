//引入初始化样式文件
import '@/styles/common.scss'

import { createApp, onMounted } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
//引入懒加载指定插件，并且注册
import {lazyPlugin} from '@/directives/index.js'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlugin)
app.mount('#app')



