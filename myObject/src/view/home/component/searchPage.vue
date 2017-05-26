<template>
    <div class="search-page">
        <div class="search-input">
            <label class="fileInput">
                <i class="iconfont icon-sousuo pl10 pt10"></i>
                <input type="text" maxlength="50" placeholder="搜索宝贝">
            </label><span>搜索</span>
        </div>
        <div class="search-cont">
            <div class="search-title">热搜宝贝</div>
            <ul class="search-list">
                <li v-for="item in searchListdata">{{item}}</li>
            </ul>
        </div>
    </div>

</template>
<script>
    export default {
        name: 'searchPage',
        data() {
            return {
                searchListdata: []
            }
        },
        created() {
            let type = this.$route.params.type;
            this.$http.jsonp('http://m.haimi.com/api/search/hotword?type=PRODUCT&platform=WAP', {
                jsonp: '_callback'
            }).then(function (res) {
                this.searchListdata = res.data.data;
            }, function (res) {
                console.log(res)
            })
        }

    }
</script>
<style scoped lang="less">
    .search-page {
        background: #fff;
        height: 100%;
        width: 100%;
        font-size: 14px;
        .search-input {
            display: flex;
            align-items: center;
            justify-content: space-around;
            padding: 10px;
            border-bottom: 1px solid #f3f3f3;
            .fileInput {
                display: inline-block;
                width: 85%;
                height: 30px;
                line-height: 30px;
                background: #e6e6e6;
                input {
                    background: none;
                    border: none;
                    box-sizing: border-box;
                }
            }
            span {
                font-size: 16px;
            }
        }
        .search-cont {
            background: #fff;
            padding: 10px;
            .search-title {
                line-height: 30px;
            }
            .search-list {
                display: flex;
                flex-wrap: wrap;
                li {
                    border: 1px solid #e6e6e6;
                    padding: 5px 10px;
                    margin-right: 10px;
                    margin-top: 10px;
                }
            }
        }
    }
</style>