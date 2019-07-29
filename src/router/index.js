import Vue from 'vue'
import Router from 'vue-router'
// components
import HealthData from '@/components/HealthData.vue'
import Time from '@/components/Time.vue'
import ViewActivity from '@/components/ViewActivity.vue'

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
            name: 'home',
            component: HealthData,
        },
        {
            path: '/time',
            name: 'time',
            component: Time,
        },
        {
            path: '/goals',
            name: 'goals',
            component: Time,
        },
        {
            path: '/activity',
            name: 'activity',
            component: Time,
        },
        {
            path: '/activity/:id',
            name: 'view_activity',
            component: ViewActivity,
        },
        {
            path: '/nutrition',
            name: 'nutrition',
            component: Time,
        },
        {
            path: '/sleep',
            name: 'sleep',
            component: Time,
        },
        {
            path: '/mindfulness',
            name: 'mindfulness',
            component: Time,
        },
        {
            path: '/settings',
            name: 'settings',
            component: Time,
        },
    ]
})