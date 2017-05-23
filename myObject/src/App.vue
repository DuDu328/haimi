<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
  import '@/static/css/reset.css';
  import '@/static/css/common.css';
  export default {
    name: 'app'
  }
</script>
<style scoped lang='less'>
#app{
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    height: 100%;
}
</style>
