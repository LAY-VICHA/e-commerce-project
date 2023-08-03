import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import setAuthHeader from './libs/apis/axiosConfig'
import './assets/css/main.css'

const app = createApp(App)

if(localStorage.token) {
    setAuthHeader(localStorage.token);
} else {
    setAuthHeader(false);
}

app.use(router)

app.mount('#app')