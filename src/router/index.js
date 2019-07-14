import Vue from 'vue'
import Router from 'vue-router'
// components
import HealthData from '@/components/HealthData.vue'
import Time from '@/components/Time.vue'

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
            component: HealthData,
        },
        {
            path: '/time',
            name: 'Time',
            component: Time,
        },
    ]
})