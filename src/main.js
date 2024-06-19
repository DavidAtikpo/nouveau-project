import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import store from './store';  // Assurez-vous que le store est importé ici


const app = createApp(App);
app.use(store);  // Assurez-vous que le store est utilisé ici
app.use(createPinia());
app.use(router);

app.mount('#app');

