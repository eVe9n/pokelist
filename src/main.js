import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
// Importar Pinia
import { createPinia } from 'pinia';
// Importar i18n
import i18n from './../i18n';
import router from './router';

// Inicializar Pinia
const pinia = createPinia();
const app = createApp(App);

app.use(i18n);
app.use(pinia);
app.use(router);

app.mount('#app');
