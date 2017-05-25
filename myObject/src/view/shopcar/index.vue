<template>
    <div class="menu">
        <div class='main sec'>
            <div class="shopcar">
                <a href="#">
                    <img src="../../static/images/shopcar.png" alt="">
                </a>
                <span @click="toHome">去首页逛逛</span>
            </div>
            <fullwater :fullData="fullData"></fullwater>
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
                fullData: []
            }
        },
        components: {
            fullwater,
            footerNav
        },
        created() {
            this.$http.get('/api/shopcarData').then(function (response) {
                var data = response.body;
                this.fullData = data;
            }, function (response) {
                console.log(response)
            })
        },
        methods: {
            toHome() {

            }
        }
    }
</script>
<style scope lang='less'>
    .bg {
        background: #fff;
    }
    
    .sec {
        top: 0;
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