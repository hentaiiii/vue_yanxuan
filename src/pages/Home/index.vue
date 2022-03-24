<!-- 首页 -->
<template>
  <div class="homeContainer">
    <Header>
      <template v-slot:headerLeft>
        <a href="/" class="logo">
          <img src="@/static/images/logo.png" alt="" />
        </a>
      </template>
      <template v-slot:headerMiddle>
        <div class="headerSearch">
          <i class="iconfont icon-search"></i>
          <span>搜索商品, 共111926款好物</span>
        </div>
      </template>
      <template v-slot:headerRight>
        <button class="loginBtn">登录</button>
      </template>
    </Header>
    <!-- nav导航栏 -->
    <div class="scrollWrap" ref="scrollWrap">
      <ul class="contentWrap" v-if="homeList.kingKongModule">
        <li
          class="recommend"
          :class="{ active: currentIndex === -1 }"
          @click="changeNav($event, -1)"
          ref="recommendRef"
        >
          推荐
        </li>
        <li
          v-for="(item, index) in homeList.kingKongModule.kingKongList"
          :key="item.picUrl"
          @click="changeNav($event, index)"
          :class="{ active: currentIndex === index }"
          ref="otherNavRef"
        >
          {{ item.text }}
        </li>
      </ul>
      <ul v-else></ul>
    </div>
    <Recommend />
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import { mapState, mapActions } from "vuex";
import Recommend from "./Recommend/index.vue";
import Header from "@/components/Header.vue";
export default {
  name: "Home",
  components: {
    Recommend,
    Header,
  },
  data() {
    return {
      currentIndex: -1,
      scroll: null,
      navWidth: 0, // 每个nav的宽度
      navMarginLeft: 0, // 除了推荐以外的外边距
      scrollMarginLeft: 0, // nav容器的左边距
      otherNavWidth: 0, // 其他导航栏的宽度
      moveX: 0, // nav每次移动的距离
    };
  },
  mounted() {
    this.getHomeListAction();
  },
  methods: {
    ...mapActions({
      getHomeListAction: "getHomeListAction",
    }),
    _initScroll() {
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.scrollWrap, {
          scrollX: true,
          click: true,
        });
      } else {
        this.scroll.refresh();
      }
    },
    changeNav(event, index) {
      if (!event._constructed) {
        // betterscroll的问题 会导致事件触发两次
        return;
      }
      this.navWidth = this.$refs.recommendRef.getBoundingClientRect().width;
      this.navMarginLeft = parseInt(
        window.getComputedStyle(this.$refs.otherNavRef[0]).marginLeft
      );
      this.otherNavWidth = parseInt(
        window.getComputedStyle(this.$refs.otherNavRef[0]).width
      );
      this.scrollMarginLeft = parseInt(
        window.getComputedStyle(this.$refs.scrollWrap).paddingLeft
      );
      if (index === -1) {
        this.moveX = -this.scrollMarginLeft;
      } else if (index < 7) {
        // 最后三个不会触发
        this.moveX =
          this.navWidth +
          (this.navMarginLeft + this.otherNavWidth) * index +
          this.scrollMarginLeft;
      }
      this.scroll.scrollTo(-this.moveX - 15, 0, 300);
      this.currentIndex = index;
    },
  },
  computed: {
    ...mapState({
      homeList: (state) => state.home.homeList,
    }),
  },
  watch: {
    homeList() {
      this.$nextTick(() => {
        this._initScroll();
      });
    },
  },
};
</script>
<style lang="stylus" scoped>
.homeContainer
  .scrollWrap
    // position relative
    height 0.3rem
    font-size 0.14rem
    padding 0 0.15rem
    overflow hidden
    white-space nowrap
    background-color #fff
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
        margin-left 0.24rem
        &.active
          border-bottom 1px solid red
        &.recommend
          margin-left 0
</style>