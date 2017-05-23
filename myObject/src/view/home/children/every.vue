<template>
  <div class="recommend">
    <h2>{{Recommend.title}}</h2>
    <div class="recommend-cont">
      <a v-for="item in Recommend.Records"><img :src="item.Picture"></a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'everyBar',
  props: ['Recommend']
}
</script>

<style scope lang='less'>

.recommend-cont {
  display: flex;
  flex-wrap: wrap;
}
.recommend-cont a {
  width: 50%;
}
.recommend-cont img{
  width: 100%;
}
</style>
