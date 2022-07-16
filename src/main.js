import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js';
import store from './store/index.js';
// import checkIdx from './mixins/checkIndexPage.js'
// import { useCookies } from "vue3-cookies";
// import VueCookies from 'vue-cookies'

// import { VueCookieNext } from 'vue-cookie-next'



const app = createApp(App);
app.use(router);
app.use(store);
// app.use(checkIdx);
// app.use(VueCookies);

app.mount('#app');
