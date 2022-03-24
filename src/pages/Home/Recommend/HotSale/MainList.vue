<!-- 主榜单 -->
<template>
  <div class="mainListContainer" :style="{backgroundColor: bgColor}">
    <div class="name">
      <span class="txt">{{title}}</span>
    </div>
    <div class="imgWrap">
      <img v-lazy="imgSrc" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainList',
  props: ['imgSrc', 'title', 'bgColor'],
  data () {
    return {
    }
  },
}
</script>
<style lang="stylus" scoped>
.mainListContainer
  position relative
  float left
  width 1.7rem
  height 1rem
  float left
  margin-right .05rem
  margin-bottom .05rem
  .name
    margin-top .33rem
    padding-left .12rem
    .txt
      position relative
      font-size .14rem
      &::before
        position absolute
        left .01rem
        bottom -.03rem
        content: ''
        background-color #333
        width .24rem
        height .02rem
  .imgWrap
    position absolute
    top 0
    right 0
    width 1rem
    height 1rem
    img
      width 100%
      height 100%
</style>