<!-- 首页 -->
<template>
  <div class="homeContainer">
    <div class="homeHeader">
      <a href="/" class="logo">
        <img src="../../static/images/logo.png" alt="" />
      </a>
      <div class="headerSearch">
        <i class="iconfont icon-search"></i>
        <span>搜索商品, 共111926款好物</span>
      </div>
      <button class="loginBtn">登录</button>
    </div>
    <!-- nav导航栏 -->
    <div class="scrollWrap" ref="scrollWrap">
      <ul class="contentWrap" v-if="homeList.kingKongModule">
        <li class="active">推荐</li>
        <li
          v-for="item in homeList.kingKongModule.kingKongList"
          :key="item.picUrl"
        >
          {{ item.text }}
        </li>
      </ul>
      <ul v-else></ul>
    </div>
    
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import { mapState, mapActions } from "vuex";
export default {
  name: "Home",
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(() => {
      new BScroll(this.$refs.scrollWrap, {
        scrollX: true,
        click: true,
      })
    });
    this.getHomeListAction();
  },
  methods: {
    ...mapActions({
      getHomeListAction: "getHomeListAction",
    }),
  },
  computed: {
    ...mapState({
      homeList: (state) => state.home.homeList,
    }),
  },
  watch: {
    homeList() {
      this.$nextTick(() => {
        new BScroll(this.$refs.scrollWrap, {
          scrollX: true,
          click: true,
        });
      });
    },
  },
};
</script>
<style lang="stylus" scoped>
.homeHeader
  display flex
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
    width 2.21rem
    height 0.28rem
    line-height 0.28rem
    background-color #ededed
    color #666
    padding 0 0.1rem
    border-radius 0.04rem
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
.scrollWrap
  // position relative
  height 0.3rem
  font-size 0.14rem
  padding 0 0.15rem
  overflow hidden
  white-space nowrap
  .contentWrap
    // position absolute
    // top 0
    float left
    display flex
    height 0.3rem
    li
      box-sizing border-box
      height 0.3rem
      line-height 0.3rem
      padding 0 0.08rem
      &.active
        border-bottom 1px solid red
</style>