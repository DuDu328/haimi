<template>
    <div class="shopcar">
        <a href="#">
            <img src="../../../static/images/shopcar.png" alt="">
        </a>
        <router-link :to="{name:'Home'}"><span>去首页逛逛</span></router-link>
    </div>
</template>

<script>
    export default {
        name: 'moneySub'
    }
</script>

<style scoped lang='less'>
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