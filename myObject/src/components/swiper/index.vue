<template>
    <div class="swiper-container swiper">
        <ul class="swiper-wrapper">
            <!--            <router-link :to="{name:'detailpage',params:{activeID:activeID}}">-->
            <li v-for="item in swiperSlide" class="swiper-slide">
                <img v-if="item.Picture" :src="item.Picture">
                <img v-else-if="item.picture" :src="item.picture">
                <img :src="item" alt="" v-else>
            </li>
            <!--            </router-link>-->
        </ul>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
    import Swiper from '@/lib/swiper/js/swiper.js'
    require('@/lib/swiper/css/swiper.css')
    export default {
        name: 'Swiper',
        props: ['swiperSlide'],
        data() {
            return {
                swiperObj: ''
            }
        },
		watch:{
			$route(to, from){
				
			}
		},
        mounted() {
            this.swiperObj = new Swiper('.swiper', {
                autoplay: 2000,
                loop: true,
                pagination: '.swiper-pagination',
                paginationClickable: true,
                observer: true,
                observerParents: true
            })
        },
        updated() {
            this.swiperObj.update()
        }
    }
</script>
<style>
    .swiper {
        width: 100%;
    }
    
    .swiper img {
        width: 100%
    }
    
    .swiper-pagination-bullet {
        width: 15px;
        height: 3px;
        background: #999;
    }
</style>