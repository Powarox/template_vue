import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import DetailsView from '../views/DetailsView.vue';

const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        name: 'Home',
        component: HomeView,
        meta: { title: 'Home View', },
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginView,
        meta: { title: 'Login View', },
    },
    {
        path: '/details/:id',
        name: 'Details',
        props: true,
        component: DetailsView,
        meta: { title: 'Details View', },
    },
    {
        path: '/:pathMatch(.*)',
        redirect: '/login',
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    const publicPages = ['/login'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');
    if (authRequired && !loggedIn) {
        next('/login');
    } else {
        next();
    }
});

export default router;
