import { createRouter, createWebHistory } from 'vue-router'
import { authGuard } from '@auth0/auth0-vue'

// Pages
import Login from "../pages/Login.vue"
import Todos from "../pages/Todos.vue"
import Authenticate from "../pages/Authenticate.vue"

const routes = [
    {
        path: '/',
        name: 'login',
        component: Login,
    },
    {
        path: '/todos',
        name: 'todos',
        component: Todos,
        beforeEnter: authGuard,
    },
    {
        path: '/authorize',
        name: 'authorize',
        component: Authenticate
    }
]

export default function Router() {

    const router = createRouter({
        history: createWebHistory(),
        routes
    })

    return router

}