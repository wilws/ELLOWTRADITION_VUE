import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js';
import store from './store/index.js';
import VueCookies from 'vue-cookies'




const app = createApp(App);
app.use(router);
app.use(store);

app.use(VueCookies);

app.mount('#app');
