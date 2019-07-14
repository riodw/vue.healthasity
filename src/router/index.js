import Vue from 'vue'
import Router from 'vue-router'
// components
import HelloWorld from '@/components/HelloWorld.vue'

Vue.use(Router)

export default new Router({
    // mode: 'history',

    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'Home',
            component: HelloWorld,
        },
    ]
})