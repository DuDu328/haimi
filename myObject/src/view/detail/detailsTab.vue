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
                宝贝评分
            </div>
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
    </div>
</template>
<script>
    import Swiper from '@/components/swiper/'
    import evaluate from '@/components/evaluate'
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
                Promises: [],
                PropertySku: [],
                TopReviews: [],
                Descriptioin: '',
                WeixinQRCode: ''
            }
        },
        components: {
            Swiper,
            evaluate
        },
        created() {
            let ProductID = this.$route.params.ProductID;
            this.$http.jsonp("http://m.haimi.com/api/product/detail-cdn?ProductID=" + ProductID + "&platform=WAP", {
                jsonp: '_callback'
            }).then(function (res) {
                let data = res.body.data;
                console.log(data)
                this.swiperSlide = JSON.parse(data.ProductPictures); //图片轮播
                this.productTitle = data.Subject; //产品描述
                this.productPrice = data.FinalAmount; //产品价格
                this.productSection = data.FinalPrice; //价格区间
                this.MonthSalesNum = data.MonthSalesNum; //月销数量
                this.MaxCreditDeduct = data.MaxCreditDeduct; //积分抵价
                this.Promises = data.Promises; //保障
                this.PropertySku = data.PropertySku.Properties; //请选择
                this.TopReviews = data.TopReviews; //评论
                this.Descriptioin = data.Descriptioin; //商品详情
                this.WeixinQRCode = data.Mall.WeixinQRCode; //二维码
                console.log(this.productPrice)
            }, function (res) {
                alert(res)
            })
        }
    }
</script>
<style lang=less>
    .marginb {
        margin-bottom: 10px;
    }
    
    .shop-detail {
        background: #eee;
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
</style>