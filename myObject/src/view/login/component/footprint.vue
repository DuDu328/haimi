<template>
    <div class="shoping">
        hello
        <dl v-for="item in fullData">
            <!--
            <dt><img :src="item." alt=""></dt>
<dd>
    <p>{{}}</p>
    <p>￥{{}}</p>
</dd>
-->
        </dl>
    </div>
</template>

<script>
    export default {
        name: 'money',
        data() {
            return {
                fullData: []
            }
        },
        created() {
            //            this.$http.jsonp('http://m.haimi.com/api/bonus/all-list?page=1&pageSize=20&IsActivated=Y&current=Y&IsUsed=N&platform=WAP', { // jsonp: '_callback' // }).then(function (res) { // this.fullData = res.body.data; // }, // function (res) { // console.log(res) // })
        }
    }
</script>

<style scoped lang='less'>
    .shoping {
        dl {
            padding: 10px;
            display: flex;
            justify-content: space-between;
            dt {
                background: #ccc;
                width: 40%;
                img {
                    width: 100px;
                    height: 100px;
                }
            }
        }
    }
</style>