<template>
    <div>
        <div class="msg-info" @click="addShop" ref="buyShopCar"></div>
        <div class="buy-info" ref="shopMark">
            <div class="info cle">
                <img :src="Data.shopPicture" alt="">
                <p><span class="c_red price">￥{{productPrice || Data.productPrice}}</span>
                    <span class="count">(库存{{Stock || Data.Stock}}件）</span>
                    <span v-if="Data.AttrInfoArray.length>0">请选择： <em ref="Options" v-for="i in Data.AttrInfoArray">{{AttrName || i.AttrName}}</em></span>
                </p>


            </div>


            <div class="chose-cont" v-if="Data.AttrInfoArray.length>0">
                <div class="cont-head" v-for="options in Data.AttrInfoArray">
                    <p ref="Options" class="Options">{{options.AttrName}}</p>
                    <ul ref="typeList">
                        <li key="index" @click="choseOption(index)" v-for="(val,index) in options.AttrValues.split(',')">{{val}}</li>
                    </ul>
                </div>
            </div>

            <div class="nums cle">
                <p>购买数量</p>
                <p>
                    <span @click="jianCount"> - </span><span ref="num">{{count}}</span><span @click="addCount"> + </span>
                </p>
            </div>
            <div class="submit c_fff f14" @click="sure">确定</div>

        </div>
    </div>
</template>
<script>
    export default {
        name: 'buyShopCar',
        props: ['Data'],
        data() {
            return {
                shopPicture: '',
                productPrice: '',
                Stock: '',
                AttrName: '',
                count: 1
            }
        },
        methods: {
            addShop() {
                    this.$refs.buyShopCar.style.display = "none";
                    this.$refs.shopMark.style.display = "none";
                },
                choseOption(i) {
                    this.productPrice = this.Data.SkuInfo[i].Price; //产品价格
                    this.Stock = this.Data.SkuInfo[i].Stock; //产品库存
                    this.AttrName = this.Data.SkuInfo[i].SkuName; //产品名称
                },
                jianCount() {
                    if (this.count >= 1) {
                        this.count--;
                    }
                    return this.count;
                },
                addCount() {
                    if (this.count < 10) {
                        this.count++;
                    }
                    return this.count;
                },
                sure() {
                    //存取数据
                    //                    this.$store.state.list.push({
                    //                        ProductID: this.Data.ProductID,
                    //                        shopPicture: this.Data.shopPicture,
                    //                        productPrice: this.Data.productPrice,
                    //                        productTitle: this.Data.productTitle,
                    //                        count: this.count
                    //                    })

                    //存入localStorage
                    var obj = {
                        price: this.productPrice || this.Data.productPrice,
                        num: this.count,
                        name: this.Data.productTitle,
                        picture: this.shopPicture || this.Data.shopPicture,
                        ID: this.Data.ProductID
                    }
                    var arr = window.localStorage['anyone'];
                    var aa = arr ? JSON.parse(arr) : [];
                    aa.push(this.Data.ProductID)
                    window.localStorage.setItem('anyone', JSON.stringify(aa))
                    window.localStorage.setItem('product' + this.Data.ProductID, JSON.stringify(obj))



                    //点击确定添加购物成功
                    this.addShop();
                    var addShop = document.createElement('div');
                    addShop.className = "addShop";
                    addShop.innerHTML = "<span>添加购物车成功</span>";
                    document.body.appendChild(addShop);
                    setTimeout(function () {
                        document.body.removeChild(addShop);
                    }, 1000);
                }
        },
        mounted() {
            this.choseOption()
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
        display: none;
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
        display: none;
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
                    em {
                        font-style: normal;
                    }
                }
                .count {
                    font-size: 10px;
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
                &.on {
                    border: 1px solid #801a2a;
                    color: #801a2a;
                }
            }
        }
    }
    
    .addShop {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        span {
            color: #fff;
            display: block;
            border-radius: 10px;
            background: rgba(0, 0, 0, .8);
            padding: 10px;
            z-index: 1000;
            position: absolute;
            left: 35%;
            top: 45%;
        }
    }
</style>