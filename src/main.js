import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import Detail from './pages/Detail.vue';
import Category from './pages/Category.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/detail', component: Detail },
    { path: '/category', component: Category },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
