<!-- 爆款模块 -->
<template>
  <div class="popularContainer">
    <div class="title">{{title}}</div>
    <div class="subTitle">{{subTitle}}</div>
    <div class="imgWrap">
      <img v-for="(pic, index) in picUrlList" :key="index" v-lazy="pic" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props: ['subTitle', 'title', 'picUrlList'],
  data () {
    return {
    };
  },

}

</script>
<style lang="stylus" scoped>
.popularContainer
  margin-top .02rem
  margin-left .02rem
  padding-top .1rem
  padding-left .1rem
  background-color #f5f5f5
  width 1.715rem
  height 1.32rem
  box-sizing border-box
  .title
    color #333
    font-size .16rem
    padding-left .05rem
    padding-bottom .1rem
  .subTitle
    color red
    font-size .12rem
    padding-left .05rem
  .imgWrap
    img
      width .75rem
      height .75rem
      padding-top .1rem
</style>