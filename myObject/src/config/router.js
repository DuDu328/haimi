import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/home/'
import typeIndex from '@/view/type/'
import shopIndex from '@/view/shopcar/'
import myIndex from '@/view/myInfo/'
import Login from '@/view/Login/'
import typeTab from '@/view/type/component/typeTab'
import pinpaiTab from '@/view/type/component/pinpaiTab'
import IndexTab from '@/view/home/component/IndexTab'
import jujiaTab from '@/view/home/component/jujiaTab'

Vue.use(Router)

export default new Router({
    mode: 'history',
    scrollBehavior(savePofition) {
        if (savePofition) {
            return savePofition
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    },
    routes: [
        {
            path: '/',
            redirect: "/home/index/2"
        },
        {
            path: '/home',
            redirect: "/home/index/2",
            name: 'Home',
            component: Home,
            children: [
                {
                    path: 'index/:id',
                    component: IndexTab
        },
                {
                    path: 'jujia/:id',
                    component: jujiaTab
        },
                {
                    path: 'beauty/:id',
                    component: jujiaTab
        },
                {
                    path: 'person/:id',
                    component: jujiaTab
        },
                {
                    path: 'bag/:id',
                    component: jujiaTab
        },
                {
                    path: 'electric/:id',
                    component: jujiaTab
        },
                {
                    path: 'Kitchen/:id',
                    component: jujiaTab
        },
                {
                    path: 'Accessories/:id',
                    component: jujiaTab
        },
                {
                    path: 'snacks/:id',
                    component: jujiaTab
        },
                {
                    path: 'baby/:id',
                    component: jujiaTab
        },
                {
                    path: 'furniture/:id',
                    component: jujiaTab
        }
      ]
        },
        {
            path: '/type',
            redirect: "/type/index/1",
            component: typeIndex,
            children: [
                {
                    path: 'index',
                    component: typeTab
                },
                {
                    path: 'pinpai',
                    component: pinpaiTab
                }
            ]
        },
        {
            path: '/shopcar',
            component: shopIndex
        },
        {
            path: '/Login',
            name: 'Login',
            component: Login,
            beforeEnter: (to, form, next) => {
                console.log(to)
                var user = window.localStorage["userInfo"];
                if (!user) {
                    next({
                        path: '/myInfo',
                        query: {
                            "to": to.name
                        }
                    })
                } else {
                    next()
                }
            }
        },
        {
            path: '/myInfo',
            name: 'myInfo',
            component: myIndex
        }
  ]
})