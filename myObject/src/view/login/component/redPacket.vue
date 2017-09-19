<template>
    <div>
        <div class="order-list">
            <router-link :to="{path:item.Link}" v-for="item in lists" active-class="active">
                {{item.text}}
            </router-link>
        </div>
        <div class="maybe">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'redPacket',
        data() {
            return {
                lists: [
                    {
                        text: "可用",
                        Link: "/redPacket/maybe"
                    },
                    {
                        text: "已使用",
                        Link: "/redPacket/use"
                    },
                    {
                        text: "已过期",
                        Link: "/redPacket/BeOverdue"
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
            width: 33.3%;
            position: relative;
            display: block;
            font-size: 12px;
            text-align: center;
            &.active:after {
                content: "";
                display: block;
                width: 80%;
                margin-left: 10%;
                height: 3px;
                background: rgb(153, 31, 51);
                position: absolute;
                bottom: 0;
                left: 0;
            }
        }
    }
    
    .maybe {
        background: #f8f8f8;
        position: absolute;
        top: 44px;
        bottom: 0;
        p {
            color: #e6e6e6;
        }
    }
    
    .mrginb {
        margin-bottom: 10px;
    }
</style>