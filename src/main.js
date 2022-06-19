import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createWebHistory, createRouter } from "vue-router";
import routes from './routes';
import { store } from './vuex/index'
import uiKit from "~/components/ui/uiKit";

loadFonts();

const router = createRouter({
    history: createWebHistory(),
    routes,
});

createApp(App)
    .use(router)
    .use(vuetify)
    .use(store)
    .use(uiKit)
    .mount('#app');
