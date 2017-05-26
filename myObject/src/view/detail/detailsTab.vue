<template>
    <div class="shop-detail">
        <div class="detail-head">
            <Swiper :swiperSlide="swiperSlide"></Swiper>
            <h2 class="product-title">{{productTitle}}</h2>
            <div class="product-price">
                <span><span class="price">￥{{productPrice}}-￥{{productSection}}</span><span class="integral">积分可抵{{MaxCreditDeduct}}%</span></span>

                <span class="monthly-sales">月销{{MonthSalesNum}}件</span>
            </div>
        </div>
        <div class="product-postage marginb">
            <ul>
                <li>邮费0元</li>
            </ul>
        </div>
        <!--保障-->
        <div class="guarantee marginb">
            <span v-for="item in Promises">{{item}}</span>
        </div>
        <div class="chose marginb">
            请选择
            <span v-for="item in PropertySku">{{item.Name}}，</span>
            <i class="iconfont icon-jiantou2"></i>
        </div>
        <!--baby评分-->
        <div class="product-baby marginb">
            <div class="baby-head">
                宝贝评分<span class="c_red">{{MemberProductScore}}分</span>
            </div>
            <!--评论-->
            <div class="baby-evaluate">
                <evaluate :evaluate="TopReviews"></evaluate>
            </div>
        </div>
        <div class="detail-cont">
            <div class="detail-cont-title">
                商品详情
            </div>
            <div><img :src="WeixinQRCode" alt=""></div>
            <div v-html='Descriptioin'></div>
        </div>
        <!--购物车-->
        <shopCar :Data="shopData" ref="shopCar"></shopCar>
        <div class="detail-foot">
            <span class="foot-icon">
                <a href="/home/index/2" class="border-r"><i class="iconfont icon-shouye"></i></a>
                <a href="#" class="border-r"><i class="iconfont icon-iconfontwujiaoxing74"></i></a>
                <a href="#" class="border-r"><i class="iconfont icon-shopcar"></i></a>
            </span>
            <span class="border-r" @click="addshop">
                <a>加入购物车</a>
            </span>
            <span class="buy" @click="buyshop">
                <a>立即购买</a>
            </span>
        </div>
    </div>
</template>
<script>
    import Swiper from '@/components/swiper/'
    import evaluate from '@/components/evaluate'
    import shopCar from '@/components/shopcar'
    export default {
        name: 'shopDetail',
        data() {
            return {
                swiperSlide: [],
                productTitle: '',
                productPrice: '',
                productSection: '',
                MonthSalesNum: '',
                MaxCreditDeduct: '',
                MemberProductScore: '',
                Promises: [],
                PropertySku: [],
                TopReviews: [],
                Descriptioin: '',
                WeixinQRCode: '',
                shopData: {
                    shopPicture: '',
                    productPrice: '',
                    PropertySku: []
                },

            }
        },
        components: {
            Swiper,
            evaluate,
            shopCar
        },
        created() {
            let ProductID = this.$route.params.ProductID;
            this.$http.jsonp("http://m.haimi.com/api/product/detail-cdn?ProductID=" + ProductID + "&platform=WAP", {
                jsonp: '_callback'
            }).then(function (res) {
                let data = res.body.data;
                this.shopData;
                this.swiperSlide = JSON.parse(data.ProductPictures); //图片轮播
                this.shopData.shopPicture = this.swiperSlide[0].picture;
                this.shopData.productPrice = data.FinalAmount; //产品价格
                this.shopData.PropertySku = data.PropertySku; //商品详情
                this.productTitle = data.Subject; //产品描述
                this.productPrice = data.FinalAmount; //产品价格
                this.productSection = data.FinalPrice; //价格区间
                this.MonthSalesNum = data.MonthSalesNum; //月销数量
                this.MaxCreditDeduct = data.MaxCreditDeduct; //积分抵价
                this.MemberProductScore = data.MemberProductScore; //宝贝评分等级
                this.Promises = data.Promises; //保障
                this.PropertySku = data.PropertySku.Properties; //请选择
                this.TopReviews = data.TopReviews; //评论
                this.Descriptioin = data.Descriptioin; //商品详情
                this.WeixinQRCode = data.Mall.WeixinQRCode; //二维码
            }, function (res) {
                alert(res)
            })
            this.addshop();
            this.buyshop();
        },
        methods: {
            addshop() {
                    console.log(this.$refs)
                        //                    this.$refs.ShopCar.style.display = "block";
                },
                buyshop() {
                    //                    this.$refs.ShopCar.style.display = "block";
                }
        }
    }
</script>
<style lang=less>
    .marginb {
        margin-bottom: 10px;
    }
    
    .shop-detail {
        background: #eee;
        height: 100%;
        overflow-y: scroll;
    }
    
    .detail-head {
        background: #fff;
        padding-left: 20px;
        padding-right: 20px;
    }
    
    .product-title {
        text-align: left;
        line-height: 24px;
        max-height: 48px;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        overflow: hidden;
        font-weight: normal;
    }
    
    .product-price {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 40px;
        line-height: 40px;
        span {
            height: 20px;
            line-height: 20px;
        }
        .price {
            color: #801a2a;
            font-size: 16px;
        }
        .integral {
            margin-left: 10px;
            background: #cbac81;
            color: #fff;
        }
        .monthly-sales {
            color: #999;
        }
    }
    
    .product-postage {
        height: 40px;
        line-height: 40px;
        padding-left: 20px;
        background: #fff;
        border-top: 1px solid #eee;
        color: #999;
        ul li:before {
            content: '·';
            width: 0;
            height: 0;
            color: #000;
            padding-right: 8px;
        }
    }
    /*保障*/
    
    .guarantee {
        height: 40px;
        line-height: 40px;
        background: #fff;
        padding: 0 10px;
        span {
            padding-left: 40px;
            background: url("../../static/images/icon.png") no-repeat 15px center;
            background-size: 16px;
        }
    }
    /*请选择*/
    
    .chose {
        position: relative;
        height: 40px;
        line-height: 40px;
        background: #fff;
        padding: 0 10px;
        font-size: 14px;
        i {
            font-size: 12px;
            position: absolute;
            right: 10px;
        }
    }
    /*宝贝评分*/
    
    .product-baby {
        background: #fff;
        .baby-head {
            height: 40px;
            line-height: 40px;
            padding: 0 10px;
            font-size: 14px;
            border-bottom: 1px solid #eee;
        }
    }
    /*详情内容*/
    
    .detail-cont {
        background: #fff;
        padding: 10px;
        img {
            width: 100%;
        }
        .detail-cont-title {
            height: 40px;
            line-height: 40px;
            font-size: 14px;
        }
    }
    /*购物车*/
    
    .detail-foot {
        width: 100%;
        background: #fff;
        position: absolute;
        bottom: 0;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        border-top: 1px solid #ccc;
        span {
            width: 100%;
            height: 100%;
            line-height: 44px;
            text-align: center;
            display: inline-block;
            a {
                display: inline-block;
                width: 100%;
                height: 30px;
                line-height: 30px;
                padding-left: 5px;
                padding-right: 5px;
                box-sizing: border-box;
            }
        }
        .foot-icon {
            a {
                width: 20%;
            }
        }
        .border-r {
            border-right: 1px solid #ccc;
        }
        .buy {
            background: #801a2a;
            a {
                color: #fff;
            }
        }
    }
</style>