<template>
    <div>
        <div class="order-list">
            <router-link :to="{path:item.Link}" v-for="item in navList" active-class="onactive">
                {{item.text}}
            </router-link>
        </div>
        <div class="main">
            <router-view></router-view>
        </div>
        <footerNav></footerNav>
    </div>
</template>

<script>
    import footerNav from '@/components/footer'
    export default {
        name: 'money',
        components: {
            footerNav
        },
        data() {
            return {
                navList: [
                    {
                        text: "待付款",
                        Link: "/money/Pending"
                    },
                    {
                        text: "待发货",
                        Link: "/money/Shipment"
                    },
                    {
                        text: "待收货",
                        Link: "/money/Harvest"
                    },
                    {
                        text: "待评价",
                        Link: "/money/evaluation"
                    },
                    {
                        text: "待退款",
                        Link: "/money/Refundable"
                    }
                ]
            }
        }
    }
</script>

<style scoped lang='less'>
    .order-list {
        display: flex;
        height: 44px;
        line-height: 40px;
        margin-bottom: 3px;
        a {
            width: 20%;
            position: relative;
            display: block;
            font-size: 12px;
            text-align: center;
            &.onactive:after {
                content: "";
                display: block;
                width: 80%;
                margin-left: 10%;
                height: 3px;
                background: #000;
                position: absolute;
                bottom: 0;
                left: 0;
            }
        }
    }
</style>