import Vue from 'vue'
// vendor
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'dragscroll'
// import VueScreenSize from 'vue-screen-size'
// router
import router from '@/router'
// components
import App from '@/App'
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker'
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css'


Vue.config.productionTip = false


// https://github.com/promosis/vue-screen-size#usage-example-1---whole-app-has-access-not-recommended
// Vue.use(VueScreenSize)

// GLOBALS
window.$ = require('jquery')
window.$axios = require('axios')
window.$ApexCharts = require('apexcharts')

Vue.use(require('vue-moment'))
// components
Vue.component('VueCtkDateTimePicker', VueCtkDateTimePicker)

// app
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')