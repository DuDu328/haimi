<template>
  <div class="skinCare">
    <div id="wrapper">
      <div id="scroller">
        <div class="skinCare-main">
          <div class="skinCare-head">
            <img v-for="item in SkinWhite.fire" :src="item.Picture">
          </div>
          <div class="skinCare-cont">
            <dl v-for="item in SkinWhite.cont">
              <dt><img :src="item.Picture"></dt>
              <dd>
                <h5 class="h5_height">{{item.SlideName}}</h5>
                <p class="c_999">{{item.Description}}</p>
              </dd>
            </dl>
          </div>  
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'skinCare',
  props: ['SkinWhite']
}
</script>

<style scoped lang='less'>
.skinCare{
  background: #fff;
}
.skinCare #scroller{
  overflow: hidden;
}
.skinCare-head{
  text-align: center;
}
.skinCare-head img{
  width: 100%;
}
.skinCare-cont{
  overflow-x: scroll;
  white-space: nowrap;
}
.skinCare-cont dl{
  width: 25%;
  display: inline-block;
  padding: 10px;
  text-align: center;
}
.h5_height{
  line-height: 16px;
  margin: 0;
}
.c_999{
  font-size: 12px;
  color: #999;
}
.skinCare-cont dl img{
  width: 100%;
}
</style>
