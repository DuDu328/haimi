<template>
  <div slot="header" class="header">
    <a>
      <i class="iconfont icon-sousuo text-gray"></i>
      <input type="text" placeholder="搜索宝贝" maxlength="20">
    </a>
    <router-link class="searchInput" :to="{name:'searchPage',params:{type:searchCont}}">搜索</router-link>
  </div>
</template>
<script>
export default {
  name: 'headerNav',
  data () {
    return {
        searchCont:''
    }
  },
  mounted () {
    this.searchCont;
  }
}
</script>
<style scoped lang="less">
.header a {
  color: #fff;
}
.header input {
  width: 100%;
  padding-left: 40px;
  background: #1a1a1a;
  border: none;
  padding-top: 5px;
  padding-bottom: 5px;
  color: #f4f4f4;
  box-sizing: border-box;
}
.header i {
  position: absolute;
  top: 0;
  left: 0;
  padding-left: 15px;
  padding-right: 15px;
}
.searchInput{
  position: absolute;
  top: 0;
  right: 0;
  display: block;
  padding-left: 15px;
  padding-right: 15px;
}
</style>
