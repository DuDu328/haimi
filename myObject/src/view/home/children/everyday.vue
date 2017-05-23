<template>
  <div class="daily">
    <div class="imgs" v-for="item in daily.Special"><a><img :src="item.Picture"></a></div>
    <div class="imgs" v-for="item in daily.newsData"><a><img :src="item.Picture"></a></div>
  </div>
</template>
<script>
export default {
  name: 'everyDay',
  props: ['daily']
}
</script>

<style scope lang='less'>
.daily{
  width: 100%;
}
.daily .imgs {
  margin-top: 5px;
}
.daily img {
  width: 100%;
  height: 100%;
}
</style>
