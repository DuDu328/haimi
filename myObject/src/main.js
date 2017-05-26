// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vueResource from 'vue-resource'
import App from './App'
import router from './config/router'
import positionStatic from './directive/positionStatic'
    // for Vue 1.0
import VueLazyload from './lib/vueLazyload/vue-lazyload'
import Vuex from './lib/vuex/vuex.min' //引入vuex
Vue.use(VueLazyload, {
    error: 'dist/error.png',
    loading: 'dist/loading.gif',
    try: 4
})
Vue.use(vueResource)
Vue.use(Vuex)

Vue.directive("position-static", positionStatic)
const store = new Vuex.Store({
    state: {
        count: 1
    },
    mutations: {
        increment(state) {
            // 变更状态
            state.count++
        }
    }
})
new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: {
        App
    }
})