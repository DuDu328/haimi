<template>
    <div class='m-wrapper menu'>
        <nav class="m-wrapper nav">
            <router-link v-for="item in navData" :to="item.Link" active-class="on">{{item.Title}}</router-link>
        </nav>
        <div class='main'>
            <router-view></router-view>
        </div>
        <footerNav></footerNav>
    </div>
</template>
<script>

import menuNav from '@/view/home/children/menu'
import footerNav from '@/components/footer'
    export default {
        name: 'typeIndex',
        name: 'Home',
        data() {
            return {
                navData: [
                    {
                        "Title": "分类",
                        "Link": "/type/index"
                    },
                    {
                        "Title": "品牌",
                        "Link": "/type/pinpai"
                    }
                ]
            }
        },
        components: {
            menuNav,
            footerNav
        }
    }
</script>
<style scope lang='less'>
   
    .nav{
        height: 40px;
        line-height: 40px;
        text-align: center;
        margin-bottom: 3px;
    }
    .nav a{
        display: inline-block;
        padding-left: 10px;
        padding-right: 10px;
    }
    .nav a.on{
        
        border-bottom: 3px solid #242424;
    }
</style>