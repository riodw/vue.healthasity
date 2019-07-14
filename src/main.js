import Vue from 'vue'
// vendor
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'dragscroll'
// router
import router from '@/router'
// components
import App from '@/App'


Vue.config.productionTip = false


// GLOBALS
window.$ = require('jquery')
window.$axios = require('axios')
window.$ApexCharts = require('apexcharts')

// app
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')