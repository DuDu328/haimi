<template>
    <div class="search-page">
        <div class="search-input">
            <label class="fileInput">
                <i class="iconfont icon-sousuo pl10 pt10"></i>
                <input type="text" maxlength="50" placeholder="搜索宝贝">
            </label><span>搜索</span>
        </div>
        <div class="search-cont" v-if="auguments">
            <div class="search-head">
                <span>综合排序</span>
                <span>销量优先</span>
                <span>价格排序</span>
            </div>
            <full :fullData="fullData"></full>
            <fullwater :fullData="fullData"></fullwater>
        </div>
        <div class="search-cont" ref="hotInput" v-else>
            <div class="search-title">热搜宝贝</div>
            <div class="search-list">
                <router-link v-for="(item,index) in typeListdata" :to="{name:'searchPage',params:{Subject:item}}">
                    <span @click="hotSearch">{{item}}</span>
                </router-link>
            </div>
        </div>
    </div>

</template>
<script>
    import full from '@/components/fullwater/full'
    import fullwater from '@/components/fullwater/fullwater'
    export default {
        name: 'searchPage',
        components: {
            full,
            fullwater
        },
        data() {
            return {
                typeListdata: [],
                fullData: [],
                auguments: ''
            }
        },
        created() {
            let type = this.$route.params.type;
            this.$http.jsonp('http://m.haimi.com/api/search/hotword?type=' + type + '&platform=WAP', {
                jsonp: '_callback'
            }).then(function (res) {
                this.typeListdata = res.data.data;
            }, function (res) {
                console.log(res)
            })


            //分类
            let Subject = this.$route.params.Subject;
            this.$http.jsonp('http://m.haimi.com/api/search/product?ActivityID=&BonusID=&Status=ON&page=1&pageSize=20&Subject=' + Subject + 'Sort=&BrandID=&platform=WAP', {
                jsonp: '_callback'
            }).then(function (res) {
                this.fullData = res.data;
            }, function (res) {
                console.log(res)
            })


            let subCont = this.$route.params.Subject;
            this.$http.jsonp('http://m.haimi.com/api/search/product?ActivityID=&BonusID=&Status=ON&page=1&pageSize=20&Subject=' + subCont + '&Sort=&BrandID=&platform=WAP', {
                jsonp: '_callback'
            }).then(function (res) {
                this.fullData = res.data;
            }, function (res) {
                console.log(res)
            })

            //产品
            let BrandID = this.$route.params.Subject;
            if (Number(BrandID)) {
                this.$http.jsonp('http://www.haimi.com/api/search/product?ActivityID=&BonusID=&Status=ON&page=1&pageSize=20&Subject=&Sort=&BrandID=' + BrandID + '&platform=WAP', {
                    jsonp: '_callback'
                }).then(function (res) {
                    this.fullData = res.data.data;
                }, function (rese) {
                    console.log(res)
                })
            }

            this.getUrl();
        },
        methods: {
            getUrl() {
                    this.auguments = window.location.pathname.split('/')[2];
                    //                    console.log(this.auguments)
                },
                hotSearch() {
                    window.location.reload(true);
                    var hotInput = this.$refs.hotInput,
                        sort = this.$refs.sort;
                    hotInput.style.display = "none";
                    if (sort.style.display = "block") {
                        sort.style.display = "none";
                    } else {
                        sort.style.display = "block";
                    }
                }
        }
    }
</script>
<style scoped lang="less">
    .search-page {
        background: #fff;
        height: 100%;
        width: 100%;
        font-size: 12px;
        .search-input {
            display: flex;
            align-items: center;
            justify-content: space-around;
            padding: 7.5px 10px;
            border-bottom: 1px solid #f7f7f7;
            .fileInput {
                display: inline-block;
                width: 85%;
                height: 25px;
                line-height: 25px;
                background: #e6e6e6;
                input {
                    background: none;
                    border: none;
                    box-sizing: border-box;
                }
            }
            span {
                font-size: 14px;
            }
        }
        .search-cont {
            background: #fff;
            .search-head {
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-bottom: 1px solid #e6e6e6;
                span {
                    display: block;
                    width: 33.3%;
                    text-align: center;
                }
            }
            .search-title {
                padding: 10px 10px 0 10px;
            }
            .search-list {
                display: flex;
                flex-wrap: wrap;
                padding: 0 10px;
                span {
                    display: inline-block;
                    border: 1px solid #e6e6e6;
                    padding: 5px 10px;
                    margin-right: 5px;
                    margin-top: 10px;
                }
            }
        }
        .sortBox {
            display: none;
        }
    }
</style>