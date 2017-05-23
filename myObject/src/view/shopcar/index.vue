<template>
    <div class="menu">
        <div class='main'>
            <div class="shopcar">
                <a href="#">
                    <img src="../../static/images/shopcar.png" alt="">
                </a>
                <span @click="toHome">去首页逛逛</span>
            </div>
            <div class="fullwater">
                <div class="fullwater-head bg">{{title}}</div>
                <div class="fullwater-cont">
                    <div class="cont-box" v-for="items in shopcarData">
                        <dl>
                            <dt><img :src="items.Pictures"></dt>
                            <dd>
                                <p class="shop-name nowrap">{{items.Subject}}</p>
                                <p class="shop-price">￥{{items.FinalPrice}}</p>
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
        <footerNav></footerNav>
    </div>
</template>
<script>
    import fullwater from '@/components/fullwater/fullwater'
    import footerNav from '@/components/footer'
    export default {
        name: 'Shop',
        data() {
            return {
                title: '大家都在买',
                shopcarData: []
            }
        },
        components: {
            fullwater,
            footerNav
        },
        created() {
            this.$http.get('/api/shopcarData').then(function (response) {
                var data = response.body.extra;
                this.shopcarData = data.Suggest;
                console.log(this.shopcarData)
            }, function (response) {
                console.log(response)
            })
        }
    }
</script>
<style scope lang='less'>
    .bg {
        background: #fff;
    }
    
    .shopcar img {
        display: block;
        margin: 100px auto 10px;
        width: 100px;
    }
    
    .shopcar span {
        display: block;
        margin: 10px auto;
        margin-bottom: 60px;
        width: 70px;
        font-size: 10px;
        line-height: 20px;
        text-align: center;
        border: 1px solid #000;
    }
</style>