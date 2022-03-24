<!-- header组件 -->
<template>
  <div class="homeHeader">
    <slot name='headerLeft'>
    </slot>
    <slot name='headerMiddle'>
    </slot>
    <slot name='headerRight'>
    </slot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="stylus" scoped>
.homeHeader
  background-color #fff
  display flex
  justify-content space-between
  font-size 0.12rem
  padding 0.08rem 0.15rem
  align-items center
  .logo
    display block
    width 0.7rem
    height 0.2rem
    margin-right 0.1rem
    img
      width 100%
      height 100%
  .headerSearch
    flex 1
    height 0.28rem
    line-height 0.28rem
    background-color #ededed
    color #666
    padding 0 0.1rem
    border-radius 0.04rem
    text-align center
    span
      height 100%
      font-size 0.14rem
  .loginBtn
    width 0.4rem
    height 0.2rem
    color red
    background-color #fff
    border 1px solid red
    font-size 0.12rem
    margin-left 0.1rem
    border-radius 0.04rem
</style>