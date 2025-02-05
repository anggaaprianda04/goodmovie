import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia } from 'pinia';
import piniaPersistedState from "pinia-plugin-persistedstate";
import Home from './pages/Home.vue';
import Detail from './pages/Detail.vue';
import Category from './pages/Category.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/detail/:id', component: Detail },
    { path: '/category/:id', component: Category },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const pinia = createPinia();
pinia.use(piniaPersistedState);

const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount("#app");
