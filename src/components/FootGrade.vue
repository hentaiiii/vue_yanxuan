<!-- 底部导航 -->
<template>
  <div class="footContainer">
    <router-link to="/home" class="gradeItem" :class="{active : $route.path === '/home'}">
      <i class="iconfont icon-home"></i>
      <span>首页</span>
    </router-link>
     <router-link to="/category" class="gradeItem" :class="{active : $route.path === '/category'}">
      <i class="iconfont icon-fenlei"></i>
      <span>分类</span>
    </router-link>
     <router-link to="/buy" class="gradeItem" :class="{active : $route.path === '/buy'}">
      <i class="iconfont icon-icon09"></i>
      <span>值得买</span>
    </router-link>
     <router-link to="/cart" class="gradeItem" :class="{active : $route.path === '/cart'}">
      <i class="iconfont icon-cart"></i>
      <span>购物车</span>
    </router-link>
     <router-link to="/personal" class="gradeItem" :class="{active : $route.path === '/personal'}">
      <i class="iconfont icon-Personal"></i>
      <span>个人</span>
    </router-link>
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
.footContainer
  display flex
  position fixed
  bottom  0
  width 100%
  height .45rem
  font-size .12rem
  border-top 1px solid #eee
  padding-top .05rem
  .gradeItem
    display flex
    flex-direction column
    text-align center
    height 100%
    width 20%
    color rgb(51,51,51)
    text-decoration none
    &.active
      color red
    i
      font-size .2rem
</style>