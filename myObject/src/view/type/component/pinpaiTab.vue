<template>
    <div class="m-box">
        <div class="m-box cont">
            <div class="product" v-for="item in pinpaiData">
                <dl>
                    <router-link :to="{name:'searchPage',params:{Subject:item.CastID}}">
                        <dt><img :src="item.Picture"></dt>
                    </router-link>
                    <dd>
                        <h3>{{item.SlideName}}</h3>
                        <p>{{item.Description}}</p>
                    </dd>
                </dl>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'pinpaiTab',
        data() {
            return {
                pinpaiData: []
            }
        },
        components: {

        },
        created() {
            this.getTypeData();
        },
        methods: {
            getTypeData: function () {
                this.$http.jsonp('http://m.haimi.com/api/ad-module/get?Alias=yanxuan-brand-list&platform=WAP', {
                    jsonp: '_callback'
                }).then(function (response) {
                    var data = response.data.data;
                    this.pinpaiData = data[0].Records;
                }, function (response) {
                    console.log(response)
                })
            }
        }
    }
</script>
<style scoped lang='less'>
    .cont {
        background: #fff;
        display: flex;
        flex-wrap: wrap;
    }
    
    .product {
        width: 33.33%;
    }
    
    .product dl {
        width: 100%;
        text-align: center;
    }
    
    .product dl img {
        width: 100%;
    }
    
    .product dl dd {
        padding-top: 5px;
        padding-bottom: 5px;
    }
    
    .product dl dd p {
        color: #999;
    }
    
    .product dl dd h3 {
        font-weight: normal;
    }
</style>