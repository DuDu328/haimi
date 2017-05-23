<template>
    <div class="fullwater">
        <div v-for="item in fullData">
            <div class="fullwater-head">{{item.Title}}</div>
            <div class="fullwater-cont">
                <div class="cont-box" v-for="i in item.Products">
                    <dl>
                        <dt><img :src="i.Pictures"></dt>
                        <dd>
                            <p class="shop-name nowrap">{{i.Subject}}</p>
                            <p class="shop-price">￥{{i.FinalPrice}}</p>
                        </dd>
                    </dl>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'fullwater',
        props: ['fullData']
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
        padding-top: 5px;
        box-sizing: border-box;
        &:nth-child(even) {
            padding-left: 2.5px;
        }
        &:nth-child(odd) {
            padding-right: 2.5px;
        }
    }
    
    .cont-box dl {
        background: #fff;
    }
    
    .cont-box dl dt {
        width: 100%;
        position: relative;
    }
    
    .cont-box dl dt img {
        width: 100%;
        height: 100%;
        position: absolute;
    }
    
    .cont-box dl dt:after {
        content: "";
        padding-top: 100%;
        display: block;
        width: 100%;
        background: #fff;
    }
    
    .cont-box dl dd {
        line-height: 24px;
        padding-left: 10px;
        padding-right: 10px;
    }
</style>