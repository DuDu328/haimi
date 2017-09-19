import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/home/' //页面首页
import typeIndex from '@/view/type/' //分类首页
import shopIndex from '@/view/shopcar/' //购物车首页
import myIndex from '@/view/myInfo/' //我的首页
import Login from '@/view/Login/' //登录首页
    //-----------------------登录----------------------------------------------
import money from '@/view/login/component/money' //购物车详情页
import moneySub from '@/view/login/component/moneySub' //购物车详情页
import Collection from '@/view/login/component/Collection' //购物车详情页
import redPacket from '@/view/login/component/redPacket' //购物车详情页
import maybe from '@/view/login/component/maybe' //购物车详情页
import use from '@/view/login/component/use' //购物车详情页
import BeOverdue from '@/view/login/component/BeOverdue' //购物车详情页
    //-------------------------足迹---------------------------------------------
import footprint from '@/view/login/component/footprint' //购物车详情页

import typeTab from '@/view/type/component/typeTab' //分类模板
import pinpaiTab from '@/view/type/component/pinpaiTab' //品牌模板
import IndexTab from '@/view/home/component/IndexTab' //首页模板
import jujiaTab from '@/view/home/component/jujiaTab' //居家模板
import searchPage from '@/view/home/component/searchPage' //居家模板

import detailsTab from '@/view/detail/detailsTab' //详情摹本
import detailpage from '@/view/detail/detailpage' //详情摹本

//----------------------提交------------------------------------------------
import Settlement from '@/view/Settlement/'

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
            component: shopIndex,
            children: [
                {
                    path: '/shopcar/Settlement',
                    name: 'Settlement',
                    component: Settlement
                }
            ]
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
        },
        {
            path: '/searchPage/keyword=:Subject',
            name: 'searchPage',
            component: searchPage,
        },
        {
            path: '/money',
            name: 'money',
            redirect: "/money/Pending",
            component: money,
            children: [
                {
                    path: 'Pending',
                    component: moneySub
                },
                {
                    path: 'Shipment',
                    component: moneySub
                },
                {
                    path: 'Harvest',
                    component: moneySub
                },
                {
                    path: 'evaluation',
                    component: moneySub
                },
                {
                    path: 'Refundable',
                    component: moneySub
                }
            ]
        },
        {
            path: '/Collection',
            name: 'Collection',
            component: Collection
        },
        {
            path: '/redPacket',
            name: 'redPacket',
            component: redPacket,
            children: [
                {
                    path: 'maybe',
                    component: maybe
                },
                {
                    path: 'use',
                    component: use
                },
                {
                    path: 'BeOverdue',
                    component: BeOverdue
                }
            ]
        },
        {
            path: '/footprint',
            name: 'footprint',
            component: footprint
        }
    ]
})