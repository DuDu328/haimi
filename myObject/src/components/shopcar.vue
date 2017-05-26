<template>
    <div class="msg-info" @click="addShop" ref="buyShopCar">
        <div class="buy-info">
            <div class="info cle">
                <img :src="Data.shopPicture" alt="">
                <p><span class="c_red price">{{Data.productPrice}}</span>
                    <span class="count">(库存{{Data.MemberProductScore}}件）</span>
                    <span v-if="Data.PropertySku">请选择： <em v-for="options in Data.PropertySku.Properties">{{options.Name}}，</em></span>
                </p>

            </div>

            <div class="chose-cont" v-if="Data.PropertySku">
                <div class="cont-head" v-for="options in Data.PropertySku.Properties">
                    <h4>{{options.Name}}</h4>
                    <ul>
                        <li v-for="t in options.Values">{{t.Name}}</li>
                    </ul>
                </div>
            </div>
            <div class="nums cle">
                <p>购买数量</p>
                <p>
                    <span> - </span><span class="num">1</span><span> + </span>
                </p>
            </div>
            <div class="submit c_fff f14">确定</div>

        </div>
    </div>
</template>
<script>
    export default {
        name: 'buyShopCar',
        props: ['Data'],
        methods: {
            addShop() {
                this.$refs.buyShopCar.style.display = "none";
            }
        }
    }
</script>
<style lang='less'>
    .msg-info {
        position: absolute;
        z-index: 100;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, .35);
        /*        display: none;*/
    }
    
    .c_red {
        color: #801a2a;
    }
    
    .c_fff {
        color: #fff;
    }
    
    .f14 {
        font-size: 16px;
    }
    
    .buy-info {
        background: #fff;
        position: absolute;
        bottom: 0;
        width: 100%;
        z-index: 101;
        .info,
        .nums {
            border-bottom: 1px solid #e6e6e6;
            width: 100%;
            height: 100%;
            padding: 20px;
        }
        .info {
            display: flex;
            align-items: center;
            box-sizing: border-box;
            img {
                width: 15%;
                border: 1px solid #ccc;
            }
            p {
                width: 75%;
                padding-left: 10px;
                box-sizing: border-box;
                span {
                    display: block;
                }
            }
        }
        .nums {
            display: flex;
            align-items: center;
            box-sizing: border-box;
            justify-content: space-between;
            width: 100%;
            padding: 10px 20px;
            p {
                span {
                    border: 1px solid #e6e6e6;
                    width: 30px;
                    text-align: center;
                    line-height: 30px;
                    background: #fff;
                    display: inline-block;
                }
                .num {
                    width: 50px;
                    border-top: 1px solid #e6e6e6;
                    border-bottom: 1px solid #e6e6e6;
                }
            }
        }
        .submit {
            line-height: 44px;
            text-align: center;
            background: #801a2a;
        }
    }
    
    .chose-cont {
        padding: 10px;
        .cont-head {
            border-bottom: 1px solid #e6e6e6;
            padding: 10px;
            ul {
                display: flex;
                flex-wrap: wrap;
                li {
                    padding: 3px 10px;
                    border: 1px solid #333;
                    margin-top: 5px;
                    margin-right: 10px;
                }
            }
        }
    }
</style>