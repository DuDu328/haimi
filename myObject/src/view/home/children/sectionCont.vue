<template>
    <div slot="sectionCont" class="section">
        <Swiper :swiperSlide="swiperSlide"></Swiper>
        <news :giftData="giftData"></news>
        <everyDay :daily="daily"></everyDay>
        <brand :brandData="brandData"></brand>
        <every :Recommend="Recommend"></every>
        <skinCare :SkinWhite="SkinWhite"></skinCare>
        <skinCare :SkinWhite="watchData"></skinCare>
        <!--        <skinCare :SkinWhite="Beauty"></skinCare>-->
        <fullwater :fullData="fullData"></fullwater>
    </div>
</template>

<script>
    import '@/lib/swiper/css/swiper.css'
    import Swiper from '@/components/swiper/'
    import news from '@/view/home/children/news'
    import every from '@/view/home/children/every'
    import everyDay from '@/view/home/children/everyDay'
    import skinCare from '@/view/home/children/skinCare'
    import brand from '@/view/home/children/brand'
    import fullwater from '@/components/fullwater/fullwater'
    export default {
        name: 'sectionCont',
        data() {
            return {
                title: '大家都在买',
                swiperSlide: [],
                daily: {
                    Special: [],
                    newsData: []
                },
                newsGifts: [],
                Recommend: {
                    title: [],
                    Records: []
                },
                SkinWhite: {
                    fire: [],
                    cont: []
                },
                watchData: {
                    fire: [],
                    cont: []
                },
                Beauty: {
                    fire: [],
                    cont: []
                },
                brandData: {
                    title: '',
                    contId1: '',
                    contId2: '',
                    contId3: ''
                },
                fullData: [],
                giftData: []
            }
        },
        components: {
            Swiper,
            news,
            everyDay,
            every,
            skinCare,
            brand,
            fullwater
        },
        created() {
            this.getIndexData();
            this.getFullData();
        },
        methods: {
            getIndexData: function () {
                this.$http.jsonp('http://m.haimi.com/api/ad-module/get?Alias=index_2&platform=WAP', {
                    jsonp: '_callback'
                }).then(function (response) {
                    var data = response.body.data;
                    this.swiperSlide = data[0].Records;
                    this.giftData = data[1].Records;
                    this.daily;
                    this.daily.Special = data[2].Records;
                    this.daily.newsData = data[3].Records;
                    this.brandData = data[4];
                    this.brandData.title = this.brandData.Channel.Name;
                    this.brandData.contId1 = this.brandData.Records[0].Picture;
                    this.brandData.contId2 = this.brandData.Records[1].Picture;
                    this.brandData.contId3 = this.brandData.Records[2].Picture;
                    this.Recommend = data[5];
                    this.Recommend.title = this.Recommend.Channel.Name;
                    this.SkinWhite = data[7];
                    this.SkinWhite.cont = data[7].Records;
                    this.SkinWhite.fire = data[6].Records;
                    this.watchData = data[9];
                    this.watchData.cont = data[9].Records;
                    this.watchData.fire = data[8].Records;
                })
            },
            getFullData: function () {
                this.$http.jsonp('http://m.haimi.com/api/nav/advert-team-products?NavID=2&page=1&pageSize=100&platform=WAP', {
                    jsonp: '_callback'
                }).then(function (response) {
                    var data = response.body.data
                    this.fullData = data;
                })
            }
        }
    }
</script>

<style scoped>

</style>