import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
// import router from './router'
import 'virtual:windi.css'
import './assets/main.scss'

const app = createApp(App)
const pinia = createPinia()

// app.use(router)
app.use(pinia)
app.mount('#app')
