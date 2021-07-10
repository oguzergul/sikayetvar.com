import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/user/:id',
        name: 'UserDetail',
        component: () => import(/* webpackChunkName: "about" */ '../views/UserDetail.vue')
    },
    {
        path: '/post/:id',
        name: 'PostDetail',
        component: () => import(/* webpackChunkName: "about" */ '../views/PostDetail.vue')
    }
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})


router.afterEach(() => {
    window.scrollTo(0, 0);
})

export default router
