import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/styles/tailwind.css';
import '@fortawesome/fontawesome-free'

createApp(App).use(router).use(store).mount('#app');
