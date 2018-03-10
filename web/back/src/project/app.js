import './common/common.css'
import './libs/bootstrap/bootstrap-4.0.0-alpha/dist/css/bootstrap.min.css'

import Vue from 'vue'

import HomeComponent from './components/home/home.vue'

import router from './router/router'

new Vue({
    el: '#app',
    router,
    render: h => h(HomeComponent)
})