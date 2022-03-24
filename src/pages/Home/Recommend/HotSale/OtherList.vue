<!-- 其他导航商品类型 -->
<template>
  <div class="otherListContainer">
    <div class="name">{{title}}</div>
    <div class="imgWrap">
      <img v-lazy="imgSrc" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'OtherList',
  props: ['title', 'imgSrc'],
  data () {
    return {
    };
  },

}

</script>
<style lang="stylus" scoped>
.otherListContainer
  width .825rem
  height .9rem
  background-color #f5f5f5
  float left
  border-radius .02rem
  overflow hidden
  margin-right .05rem
  margin-bottom .05rem
  .name
    color #333
    font-size .12rem
    margin-top .05rem
    text-align center
  .imgWrap
    width .6rem
    height .6rem
    line-height .6rem
    margin 0 auto
    img
      width 100%
      height 100% 

</style>