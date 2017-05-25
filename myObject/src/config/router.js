import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/home/' //页面首页
import typeIndex from '@/view/type/' //分类首页
import shopIndex from '@/view/shopcar/' //购物车首页
import myIndex from '@/view/myInfo/' //我的首页
import Login from '@/view/Login/' //登录首页
import typeTab from '@/view/type/component/typeTab' //分类模板
import pinpaiTab from '@/view/type/component/pinpaiTab' //品牌模板
import IndexTab from '@/view/home/component/IndexTab' //首页模板
import jujiaTab from '@/view/home/component/jujiaTab' //居家模板

import detailsTab from '@/view/detail/detailsTab' //详情摹本

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
            //路由拦截
            beforeEnter: (to, form, next) => {
                var user = window.localStorage["userInfo"];
                console.log(user)
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
            params: {
                toUrl: ''
            },
            component: myIndex
        },
        {
            path: '/shopDetail/:ProductID',
            name: 'shopDetail',
            component: detailsTab,
        }
  ]
})