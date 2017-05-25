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
                <a href="#"><span class="text-gray">查看全部订单</span><i class="iconfont icon-jiantou2 text-gray"></i></a>
            </div>
            <div class="order-list">
                <a href="#">
                    <i class="iconfont icon-daifukuan"></i>
                    <span>待付款</span>
                </a>
                <a href="#">
                    <i class="iconfont icon-daifahuo"></i>
                    <span>待发货</span>
                </a>
                <a href="#">
                    <i class="iconfont icon-tn-daishouhuo"></i>
                    <span>待收货</span>
                </a>
                <a href="#">
                    <i class="iconfont icon-tabsdaipingjia"></i>
                    <span>待评价</span>
                </a>
                <a href="#">
                    <i class="iconfont icon-tuikuan"></i>
                    <span>待退款</span>
                </a>
            </div>
        </div>
        <div class="liginLIst marginb">
            <ul>
                <li v-for="item in headlist">
                    <span><i :class="item.icon"></i><span>{{item.cont}}</span></span>
                    <a href="">
                        <span class="telephone"></span>
                        <i :class="item.jiantou"></i>
                    </a>
                </li>
            </ul>
        </div>
        <div class="quit marginb">
            <a href="/myInfo">退出登录</a>
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
                headlist: [
                    {
                        "icon": "iconfont icon-shoucang1 text-gray pl10 pr10",
                        "cont": "收藏宝贝",
                        "jiantou": "iconfont icon-jiantou2 text-gray pl10 pr10"
                    },
                    {
                        "icon": "iconfont icon-daifukuan text-gray pl10 pr10",
                        "cont": "红包优惠券",
                        "jiantou": "iconfont icon-jiantou2 text-gray pl10 pr10"
                    },
                    {
                        "icon": "iconfont icon-zuji text-gray pl10 pr10",
                        "cont": "足迹",
                        "jiantou": "iconfont icon-jiantou2 text-gray pl10 pr10"
                    },
                    {
                        "icon": "iconfont icon-jifen text-gray pl10 pr10",
                        "cont": "积分商城",
                        "jiantou": "iconfont icon-jiantou2 text-gray pl10 pr10"
                    },
                    {
                        "icon": "iconfont icon-dingwei text-gray pl10 pr10",
                        "cont": "收获地址",
                        "jiantou": "iconfont icon-jiantou2 text-gray pl10 pr10"
                    },
                    {
                        "icon": "iconfont icon-shouji text-gray pl10 pr10",
                        "cont": "绑定手机",
                        "jiantou": "iconfont icon-jiantou2 text-gray pl10 pr10"
                    },
                    {
                        "icon": "iconfont icon-zhijiaoyidterji text-gray pl10 pr10",
                        "cont": "海蜜客服",
                        "jiantou": "iconfont icon-jiantou2 text-gray pl10 pr10"
                    }
                ]
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
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 0 10px 10px;
            border-bottom: 1px solid #eee;
            a i {
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