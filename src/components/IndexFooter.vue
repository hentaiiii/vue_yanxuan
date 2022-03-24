<!-- 首页底部 -->
<template>
  <div class="footerContainer">
    <div class="downLoadApp">
      <a>下载App</a>
      <a>下载App</a>
    </div>
    <p>
      网易公司版权所有 © 1997- 2022
      <br>
      食品经营许可证：JY13301080111719
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

}

</script>
<style lang="stylus" scoped>
.footerContainer
  box-sizing border-box
  width 3.75rem
  background-color #414141
  font-size .12rem
  padding .27rem .1rem .14rem .1rem
  color #fff
  .downLoadApp
    margin-bottom .18rem
    text-align center
    >a
      display inline-block
      border 1px solid #fff
      margin-right .2rem
      width .84rem
      height .29rem
      line-height .29rem
      color #fff
  p
    text-align center
    line-height .23rem  
</style>