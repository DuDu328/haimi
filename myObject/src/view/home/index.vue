<template>
    <div class='m-wrapper menu'>
        <headerNav></headerNav>
        <div class='m-content main' v-positionFixed>
            <menuNav :navData="navData"></menuNav>
            <router-view></router-view>
        </div>
        <footerNav></footerNav>
    </div>
</template>
<script>
    import headerNav from '@/components/header'
    import menuNav from '@/view/home/children/menu'
    import footerNav from '@/components/footer'
    export default {
        name: 'Home',
        data() {
            return {
                navData: []
            }
        },
        components: {
            headerNav,
            menuNav,
            footerNav
        },
        created() {
            this.$http.get('/api/navList').then(function (response) {
                var data = response.body.data
                this.navData = data
            }, function (response) {
                console.log(response)
            })
        }
    }
</script>
<style scope lang='less'>
    .menu {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    
    .header {
        height: 40px;
        line-height: 40px;
        background: #242424;
        align-items: center;
    }
    
    .main {
        flex: 1;
        overflow-y: auto;
        background: #f3f3f3;
        position: relative;
    }
    
    .footer {
        height: 40px;
        padding-top: 5px;
        padding-bottom: 5px;
        display: flex;
        border-top: 1px solid #e6e6e6;
    }
</style>