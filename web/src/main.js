import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import './assets/scss/style.scss'
import './assets/scss/_variables.scss'
import './assets/iconfont/iconfont.css'

import VueAwesomeSwiper from 'vue-awesome-swiper'

import CardList from './components/CardList'
Vue.component('m-list-card', CardList)

import Card from './components/Card'
Vue.component('m-card', Card)

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */ )

import axios from 'axios'
Vue.prototype.$http = axios.create({
    baseURL: 'http://localhost:3000/web/api'
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')