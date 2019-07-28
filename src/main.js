import Vue from 'vue'
// vendor
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'dragscroll'
// axios
import axios from 'axios'
import VueAxios from 'vue-axios'
// import VueScreenSize from 'vue-screen-size'
// date picker
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker'
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css'
// charts
import VueApexCharts from 'vue-apexcharts'

// router
import router from '@/router'
// components
import App from '@/App'


Vue.config.productionTip = false


// https://github.com/promosis/vue-screen-size#usage-example-1---whole-app-has-access-not-recommended
// Vue.use(VueScreenSize)

// GLOBALS
window.$ = require('jquery')
// middle
Vue.use(require('vue-moment'))
Vue.use(VueAxios, axios)

// components
Vue.component('VueCtkDateTimePicker', VueCtkDateTimePicker)
Vue.component('apexchart', VueApexCharts)

// app
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')