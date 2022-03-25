<!-- 值得买头部 -->
<template>
  <div class="BuyHeader">
    <div class="iconfont icon-home"></div>
    <div class="butHeaderTitle">{{ title }}</div>
    <div class="buyHeaderRight">
      <div class="iconfont icon-search"></div>
      <div class="iconfont icon-cart"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BuyHeader",
  props: ["title"],
  data() {
    return {};
  },
};
</script>
<style lang="stylus" scoped>
.BuyHeader
  position fixed
  z-index: 9
  width 3.75rem
  box-sizing border-box
  top 0
  background-color #fff
  padding-left 0.12rem
  padding-right 0.13rem
  max-width 7.68rem
  margin 0 auto
  height 0.5rem
  display flex
  justify-content space-between
  .iconfont
    width .23rem
    height .5rem
    font-size .24rem
    line-height .5rem
  .buyHeaderRight
    display flex 
    .icon-cart
      padding-left .12rem
  .butHeaderTitle
    font-size .18rem
    line-height .5rem
    
</style>