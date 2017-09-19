<template>
    <div slot="nav" class="nav-box">
        <div class="nav-list" ref="nav">
            <router-link v-for="(item,val) in navData" :to="item.Link+'/'+item.NavID" class="nav-item" active-class="on">
                {{item.Title}}
            </router-link>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'menuNav',
        props: ['navData']
    }
</script>
<style scoped lang='less'>
    .nav-box {
        width: 100%;
        height: 40px;
        line-height: 40px;
        overflow-x: scroll;
        background: #fff;
        .nav-list {
            width: 100%;
            height: 100%;
            display: inline-block;
            display: -webkit-box;
            .nav-item {
                position: relative;
                display: block;
                padding-left: 10px;
                padding-right: 10px;
                font-size: 12px;
                &.on:after {
                    content: "";
                    display: block;
                    width: 80%;
                    margin-left: 10%;
                    height: 3px;
                    background: #000;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                }
            }
        }
    }
    
    .pos-right {
        position: fixed;
        top: 0;
        z-index: 999;
    }
</style>