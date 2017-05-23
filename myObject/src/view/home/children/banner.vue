<template>
  <div class="swiper-container banner">
    <ul class="swiper-wrapper">
      <li class="swiper-slide" v-for="item in swiperSlide">
        <img src="{item.Title}">
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'bannerAuto',
    data () {
      return {
        swiperSlide: []
      }
    },
    mounted () {
      this.getNav()
    },
    methods: {
      getNav () {
        this.$http.get('/api/swiperSlide').then(function (response) {
          console.log(response.data)
        }, function (response) {
          console.log(response)
        })
      }
    }
  }
</script>
<style scoped lang='less'>
.banner {
  width: 100%;
}
.banner img{
  width: 100%
}
</style>
