import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const useImage = (url: string) => {
    return new URL(`/src/${url}`, import.meta.url).href;
  };
  
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
