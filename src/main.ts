import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { setupStore } from './stores'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './styles/index.scss'

const app = createApp(App)

// 配置 store
setupStore(app)

// 配置路由
app.use(router)

// 配置 Element Plus
app.use(ElementPlus)

app.mount('#app')
