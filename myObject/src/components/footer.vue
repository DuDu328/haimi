<template>
  <div slot="footer" class="footer">
    <router-link v-for="item in footList" :to="item.link" active-class="on">
      <i :class="item.icon"></i>
      <span>{{item.text}}</span>
    </router-link>
  </div>
</template>
<script>
import '@/static/fonts/iconfont.css'
export default {
  name: 'footerNav',
  data () {
    return {
      footList: [
        {
          icon: 'iconfont icon-shouye',
          text: '首页',
          link: '/'
        },
        {
          icon: 'iconfont icon-list',
          text: '分类',
          link: '/type/index'
        },
        {
          icon: 'iconfont icon-shopcar',
          text: '购物车',
          link: '/shopcar'
        },
        {
          icon: 'iconfont icon-wode',
          text: '我的',
          link: '/Login'
        }
      ]
    }
  }
}
</script>
<style scoped lang='less'>
.footer a {
  width: 25%;
  text-align: center;
  color: #999;
}
.footer a i,.footer a span{
  display: block;
}
.footer .on{
  color: #801a2a;
}
</style>
