<template>
    <div class="fullwater">
        <div v-for="(item,index) in fullData">
            <div class="fullwater-head" v-if="item.Title">
                <span>{{item.Title}}</span>
            </div>
            <div class="fullwater-cont" v-if="item.Products">
                <div class="cont-box" v-for="i in item.Products">
                    <dl>
                        <router-link :to="{name:'shopDetail',params:{ProductID:i.ProductID}}">
                            <dt><img :src="i.Pictures"></dt>
                            <dd>
                                <p class="shop-name nowrap">{{i.Subject}}</p>
                                <p class="shop-price">￥{{i.FinalPrice}}</p>
                            </dd>
                        </router-link>
                    </dl>
                </div>
            </div>
            <div class="fullwater-cont" v-else-if="item.Suggest">
                <div class="cont-box" v-for="i in item.Suggest">
                    <dl>
                        <router-link :to="{name:'shopDetail',params:{ProductID:i.ProductID}}">
                            <dt><img :src="i.Pictures"></dt>
                            <dd>
                                <p class="shop-name nowrap">{{i.Subject}}</p>
                                <p class="shop-price">￥{{i.FinalPrice}}</p>
                            </dd>
                        </router-link>
                    </dl>
                </div>
            </div>
            <div class="fullwater-cont" v-else>
                <div class="cont-box" v-for="i in item">
                    <dl v-if="i.Subject">
                        <router-link :to="{name:'shopDetail',params:{ProductID:i.ProductID}}">
                            <dt><img :src="i.Pictures"><span v-if="i.MonthSalesNum" class="MonthSales">月销{{i.MonthSalesNum}}件</span></dt>

                        </router-link>
                        <dd>
                            <p class="shop-name nowrap">{{i.Subject}}</p>
                            <p class="shop-price">
                                <span>￥{{i.FinalPrice}}</span>
                                <span><i class="iconfont icon-shopcar"></i></span>
                            </p>
                        </dd>
                    </dl>
                </div>
            </div>
<!--
            <div class="cont-box">
    <dl v-if="item.Subject">
        <router-link :to="{name:'shopDetail',params:{ProductID:item.ProductID}}">
            <dt><img :src="item.Pictures"><span v-if="item.MonthSalesNum" class="MonthSales">月销{{item.MonthSalesNum}}件</span></dt>

        </router-link>
        <dd>
            <p class="shop-name nowrap">{{item.Subject}}</p>
            <p class="shop-price">
                <span>￥{{item.FinalPrice}}</span>
                <span><i class="iconfont icon-shopcar"></i></span>
            </p>
        </dd>
    </dl>
</div>
-->
        </div>
    </div>
</template>
<script>
    export default {
        name: 'fullwater',
        props: ['fullData'],
        data() {
            return {
                title: '大家都在买'
            }
        }
    }
</script>

<style scope lang='less'>
    .fullwater-head {
        height: 40px;
        line-height: 40px;
        text-align: center;
    }
    
    .fullwater-cont {
        display: flex;
        flex-wrap: wrap;
    }
    
    .cont-box {
        width: 50%;
        padding-bottom: 8px;
        box-sizing: border-box;
        &:nth-child(even) {
            padding-left: 4px;
        }
        &:nth-child(odd) {
            padding-right: 4px;
        }
    }
    
    .cont-box dl {
        background: #fff;
    }
    
    .cont-box dl dt {
        width: 100%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        &:after {
            content: '';
            padding-top: 100%;
            background: #fff;
        }
        img {
            width: 100%;
            position: absolute;
        }
    }
    
    .MonthSales {
        position: absolute;
        bottom: 10px;
        right: 0;
        padding: 3px 5px;
        background: #999;
        color: #fff;
        font-size: 10px;
    }
    
    .cont-box dl dd {
        line-height: 24px;
        p {
            padding-left: 10px;
            padding-right: 10px;
            box-sizing: border-box;
        }
        .shop-price {
            display: flex;
            justify-content: space-between;
        }
    }
</style>