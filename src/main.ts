import './assets/themes/light.css'
import './assets/themes/dark.css'
import './assets/main.scss'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
