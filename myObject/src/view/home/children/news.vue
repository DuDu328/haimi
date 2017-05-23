<template>
    <div class="news">
        <dl v-for="item in giftData">
            <dt><img :src="item.Picture"/></dt>
            <dd>{{item.SlideName}}</dd>
        </dl>
    </div>
</template>

<script>
    export default {
        name: 'newsBar',
        props: ['giftData']
    }
</script>

<style scoped lang='less'>
    .news {
        display: flex;
    }
    
    .news dl {
        width: 25%;
        text-align: center;
        background: #fff;
        padding-bottom: 10px;
    }
    
    .news dl img {
        width: 100%;
    }
</style>