<template>
    <div>
        <div class="picturepage">
            <div class="list">
                <div class="listimg" v-for="item in imgData" @click="markshow" v-if="item">
                    <img :src="item" alt="">
                </div>
                <div class="mark" ref="mark" v-show @click="markhide">
                    <Swiper :swiperSlide="imgData"></Swiper>
                </div>
            </div>

        </div>

    </div>
</template>
<script>
    import Swiper from '@/components/swiper/'
    export default {
        name: 'picture',
        props: ['imgData'],
        components: {
            Swiper
        },
        methods: {
            markshow() {
                    this.$refs.mark.style.display = "block";
                },
                markhide() {
                    this.$refs.mark.style.display = "none";
                }
        }
    }
</script>
<style lang='less'>
    .picturepage {
        padding-bottom: 10px;
        .list {
            display: flex;
            flex-wrap: wrap;
            .listimg {
                width: 50px;
                height: 50px;
                overflow: hidden;
                margin-right: 10px;
                img {
                    width: 100%;
                }
            }
        }
    }
    
    .mark {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        background: rgba(0, 0, 0, .5);
        z-index: 999;
    }
</style>