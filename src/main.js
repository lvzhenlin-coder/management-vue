import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import request from './request/index'

const app = createApp(App);
app.config.globalProperties.$request = request;
app.use(store).use(router).mount('#app');
