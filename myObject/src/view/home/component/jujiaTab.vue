<template>
    <nav class="m-box">
        <publicPage :pageData="pageData"></publicPage>
    </nav>
</template>

<script>
    import publicPage from '@/components/publicPage'
    export default {
        name: 'jujiaTab',
        components: {
            publicPage
        },
        data() {
            return {
                pageData: {
                    ImgData: [],
                    fullData: []
                }
            }
        },
        created() {
            this.getfullwaterData();
            this.getImgData();
        },
        methods: {
            getImgData: function () {
                var pageId = this.$route.path.split("/")[2];
                console.log(pageId)
                this.$http.get('/api/' + pageId + 'Swiper', {}).then(function (response) {
                    var data = response.body.data;
                    this.pageData;
                    this.pageData.ImgData = data[0].Records;
                }, function (response) {
                    console.log(response)
                })
            },
            getfullwaterData: function () {
                var pageId = this.$route.path.split("/")[2];
                this.$http.get('/api/' + pageId + 'Data', {}).then(function (response) {
                    var data = response.body.data;
                    this.pageData;
                    this.pageData.fullData = data;
                }, function (response) {
                    console.log(response)
                })
            }
        },
        updated () {
            this.pageData.update()
        }
    }
</script>
<style scoped lang='less'>
    .tab-banner img {
        width: 100%;
    }
</style>