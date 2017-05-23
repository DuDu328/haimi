<template>
    <div class="m-box">
        <div v-if="pageData.ImgData!=''" class="tab-banner">
            <div v-for="item in pageData.ImgData">
                <img :src="item.Picture" />
            </div>
        </div>
        <fullwater :fullData="pageData.fullData"></fullwater>
    </div>
</template>

<script>
    import fullwater from '@/components/fullwater/fullwater'
    export default {
        name: 'publicPage',
        components: {
            fullwater
        },
        props: ["pageData"]
    }
</script>
<style scoped lang='less'>
    .tab-banner img {
        width: 100%;
    }
</style>