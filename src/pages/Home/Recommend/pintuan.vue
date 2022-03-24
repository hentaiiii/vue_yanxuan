<template>
  <div class="moduleRightTop" :style="{backgroundColor: backgroundColor}">
    <p class="title">{{title}}</p>
    <p class="subTitle" :class="{haveBg: haveBg}">{{subTitle}}</p>
    <img
      v-lazy="
        imgSrc
      "
      alt=""
    />
    <div class="discount">
      <div class="line1">￥{{price1}}</div>
      <div class="line2">￥{{price2}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props:['imgSrc', 'title', 'subTitle', 'price1', 'price2', 'backgroundColor', 'haveBg'],
  data() {
    return {};
  },
};
</script>
<style lang="stylus" scoped>
.moduleRightTop
  box-sizing border-box
  position relative
  height 1.075rem
  background-color pink
  margin-bottom 0.02rem
  padding-top 0.1rem
  padding-left 0.15rem
  // background-color #FBE2D3
  .title
    font-font-family 'PingFangSC-Medium'
    font-size 0.16rem
    margin-bottom 0.1rem
  .subTitle
    font-size 0.12rem
    font-font-family 'PingFangSC-Medium'
    color #7f7f7f
    width .6rem
    &.haveBg
      border-radius .02rem
      background-color #cbb693
  img
    position absolute
    top 0.07rem
    left 0.6rem
    width 1rem
    height 1rem
  .discount
    background-color #f59524
    width 0.4rem
    height 0.4rem
    position absolute
    top 0.17rem
    right 0.17rem
    border-radius 50%
    font-size 0.12rem
    text-align center
    color #fff
    .line1
      margin-top 0.08rem
    .line2
      margin-top 0.03rem
      text-decoration line-through
</style>