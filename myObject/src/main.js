// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vueResource from 'vue-resource'
import App from './App'
import router from './config/router'
import Jquery from './lib/jquery-2.1.1.min.js'
    // for Vue 1.0
import VueLazyload from './lib/vueLazyload/vue-lazyload'

Vue.use(VueLazyload, {
    error: 'dist/error.png',
    loading: 'dist/loading.gif',
    try: 4 // default 1
})
Vue.use(vueResource)
Vue.directive('positionFixed', {
        inserted: function (el) {
            el.onscroll = function () {
                var T = Math.ceil(el.scrollTop);
                var elem = el.getElementsByClassName('nav-box');
                var elemH = Math.ceil(elem.offsetHeight);
                if (T > 40) {
                    console.log(elem)
                    elem.style = "position: fixed;top: 0;z-index: 999"
                } else {
                    elem.style = "";
                }
            }

        }
    })
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
        App
    }
})