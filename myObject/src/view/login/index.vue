<template>
    <div class="login">
        <div class="head marginb">
            <span class="head-img">
                <label for="inputfile" class="files">
                <input type="file" id="inputfile" class="inputfile">
                <img src="../../static/images/headimg.png" alt="">
                </label>
            </span>
            <span></span>
            <span><i class="iconfont icon-bianji text-gray pl10 pr10"></i></span>
        </div>
        <div class="order marginb">
            <div class="order-head">
                <span>我的订单</span>
                <router-link :to="{name:'money'}">
                    <span class="text-gray">查看全部订单</span>
                    <i class="iconfont icon-jiantou2 text-gray"></i>
                </router-link>
            </div>
            <div class="order-list">
                <router-link :to="{name:'money',path:item.Link}" v-for="item in navList">
                    <i :class="item.icon"></i>
                    <span>{{item.text}}</span>
                </router-link>
            </div>
        </div>
        <div class="liginLIst marginb">
            <ul>
                <li>
                    <a href="/Collection">
                        <label for="itemCont">
                            <span class="itemCont">
                        <i class="iconfont icon-shoucang1 text-gray pl10 pr10"></i>
                        <span>收藏宝贝</span>
                            </span>
                        </label>
                        <em>
                            <span class="telephone"></span>
                            <i class="iconfont icon-jiantou2 text-gray pl10 pr10"></i>
                        </em>
                    </a>
                </li>
                <li>
                    <a href="/redPacket">
                        <label for="itemCont">
                            <span class="itemCont">
                        <i class="iconfont icon-daifukuan text-gray pl10 pr10"></i>
                        <span>红包优惠券</span>
                            </span>
                        </label>
                        <em>
                            <span class="telephone"></span>
                            <i class="iconfont icon-jiantou2 text-gray pl10 pr10"></i>
                        </em>
                    </a>
                </li>
                <li>
                    <a href="footprint">
                        <label for="itemCont">
                            <span class="itemCont">
                        <i class="iconfont icon-zuji text-gray pl10 pr10"></i>
                        <span>足迹</span>
                            </span>
                        </label>
                        <em>
                            <span class="telephone"></span>
                            <i class="iconfont icon-jiantou2 text-gray pl10 pr10"></i>
                        </em>
                    </a>
                </li>
                <li>
                    <a href="integral">
                        <label for="itemCont">
                            <span class="itemCont">
                        <i class="iconfont icon-jifen text-gray pl10 pr10"></i>
                        <span>积分商城</span>
                            </span>
                        </label>
                        <em>
                            <span class="telephone"></span>
                            <i class="iconfont icon-jiantou2 text-gray pl10 pr10"></i>
                        </em>
                    </a>
                </li>
                <li>
                    <a href="adress">
                        <label for="itemCont">
                            <span class="itemCont">
                        <i class="iconfont icon-dingwei text-gray pl10 pr10"></i>
                        <span>收获地址</span>
                            </span>
                        </label>
                        <em>
                            <span class="telephone"></span>
                            <i class="iconfont icon-jiantou2 text-gray pl10 pr10"></i>
                        </em>
                    </a>
                </li>
                <li>
                    <a href="binding">
                        <label for="itemCont">
                            <span class="itemCont">
                        <i class="iconfont icon-shouji text-gray pl10 pr10"></i>
                        <span>绑定手机</span>
                            </span>
                        </label>
                        <em>
                            <span class="telephone"></span>
                            <i class="iconfont icon-jiantou2 text-gray pl10 pr10"></i>
                        </em>
                    </a>
                </li>
                <li>
                    <a href="service">
                        <label for="itemCont">
                            <span class="itemCont">
                        <i class="iconfont icon-zhijiaoyidterji text-gray pl10 pr10"></i>
                        <span>海蜜客服</span>
                            </span>
                        </label>
                        <em>
                            <span class="telephone"></span>
                            <i class="iconfont icon-jiantou2 text-gray pl10 pr10"></i>
                        </em>
                    </a>
                </li>
            </ul>
        </div>
        <div class="quit marginb">
            <a @click="quit">退出登录</a>
        </div>
        <footerNav></footerNav>
    </div>
</template>

<script>
    import footerNav from '@/components/footer'
    export default {
        name: 'mypage',
        components: {
            footerNav
        },
        data() {
            return {
                navList: [
                    {
                        text: "待付款",
                        icon: "iconfont icon-daifukuan",
                        Link: ""
                    },
                    {
                        text: "待发货",
                        icon: "iconfont icon-daifahuo",
                        Link: ""
                    },
                    {
                        text: "待收货",
                        icon: "iconfont icon-tn-daishouhuo",
                        Link: ""
                    },
                    {
                        text: "待评价",
                        icon: "iconfont icon-tabsdaipingjia",
                        Link: ""
                    },
                    {
                        text: "待退款",
                        icon: "iconfont icon-tuikuan",
                        Link: ""
                    }
                ]
            }
        },
        methods: {
            quit() {
                window.localStorage.removeItem("userInfo");
                this.$router.push({
                    name: 'myInfo'
                })
            }
        }
    }
</script>

<style scoped lang='less'>
    .login {
        background: #f8f8f8;
        width: 100%;
        height: 100%;
    }
    
    .head {
        background: #fff;
        padding: 10px;
        display: flex;
        align-items: center;
        .head-img {
            width: 15%;
            img {
                width: 100%;
            }
            .inputfile {
                display: none;
                height: 0;
            }
        }
        span {
            display: inline-block;
            padding-right: 10px;
        }
    }
    
    .order {
        background: #fff;
        .order-head {
            padding: 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid #eee;
        }
        .order-list {
            display: flex;
            align-items: center;
            a {
                width: 20%;
                text-align: center;
                padding: 10px;
                i,
                span {
                    display: block;
                }
            }
        }
    }
    
    .liginLIst {
        background: #fff;
        ul li {
            padding: 10px 0 10px 10px;
            border-bottom: 1px solid #eee;
            a {
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            em i {
                font-size: 12px;
            }
        }
    }
    
    .quit {
        text-align: center;
        background: #fff;
        a {
            padding: 10px 0;
            height: 100%;
            display: block;
        }
    }
    
    .marginb {
        margin-bottom: 10px;
    }
</style>