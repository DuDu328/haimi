<template>
  <div class="brand">
    <h2>{{brandData.title}}</h2>
    <div class="brand-cont">
      <div class="brand-cont-left">
        <a><img :src="brandData.contId1"></a>
        <a><img :src="brandData.contId2"></a>
      </div>
      <div class="brand-cont-left">
        <a><img :src="brandData.contId3"></a>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  name: 'brand',
  props: ['brandData']
}
</script>

<style scope lang='less'>
.brand h2,.recommend h2 {
  height: 40px;
  line-height: 40px;
  font-size: 12px;
  font-weight: normal;
  text-align: center;
  background: #fff;
}
.brand-cont {
  display: flex;
}
.brand-cont-left {
  width: 50%;
  display: flex;
  flex-direction: column;
}
.brand-cont-left a {
  flex: 1;
}
.brand-cont-left img {
  width: 100%
}
</style>
