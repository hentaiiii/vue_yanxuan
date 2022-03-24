<!-- 首页 -->
<template>
  <div class="categoryContainer">
    <Header>
      <template v-slot:headerMiddle>
        <div class="headerSearch">
          <i class="iconfont icon-search"></i>
          <span>搜索商品, 共111926款好物</span>
        </div>
      </template>
    </Header>

    <div class="categoryContent">
      <div class="scrollWrap">
        <ul class="scrollUl">
          <li
            v-for="item in categoryList.categoryL1List"
            :key="item.id"
            :class="{ active: item.id === categoryId }"
            @click="changeSildeLi(item.id)"
          >
            <a href="javascript:;">{{ item.name }}</a>
          </li>
        </ul>
      </div>

      <div class="goodScrollWrap" ref="goodScrollWrap">
        <div class="contentWrap">
          <div class="banner" v-if="categoryList.currentCategory">
            <a href="javascipt:;"
              ><img
                v-lazy="categoryList.currentCategory.bannerList[0].picUrl"
                alt=""
            /></a>
          </div>
          <div
            class="categoryBox"
            v-for="categoryGroup in categoryList.categoryGroupList"
            :key="categoryGroup.id"
          >
            <h3 class="categoryTitle">{{ categoryGroup.name }}</h3>

            <ul class="goodList">
              <li v-for="item in categoryGroup.categoryList" :key="item.id">
                <a href="javascript:;">
                  <img v-lazy="item.wapBannerUrl" alt="" />
                  <span>{{ item.name }}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Header from "@/components/Header.vue";
import BScroll from "better-scroll";
export default {
  name: "Category",
  components: {
    Header,
  },
  data() {
    return {
      categoryId: 11,
      scroll: null,
    };
  },
  mounted() {
    this.getCateGoryAction(this.categoryId);
  },
  methods: {
    ...mapActions({
      getCateGoryAction: "getCateGoryAction",
    }),
    changeSildeLi(id) {
      this.categoryId = id;
      // 重新发请求
      this.getCateGoryAction(this.categoryId);
    },
    _initScroll() {
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.goodScrollWrap, {
          scrollY: true,
          click: true,
        })
      } else {
        this.scroll.refresh()
      }
    },
  },
  computed: {
    ...mapState({
      categoryList: (state) => state.category.categoryList,
    }),
  },
  watch: {
    categoryList() {
      this.$nextTick(() => {
        this._initScroll();
      });
    },
  },
};
</script>
<style lang="stylus" scoped>
.categoryContainer
  height calc(100vh - 0.95rem)
  .categoryContent
    display flex
    border-top 0.01rem solid #ccc
    background-color #fff
    height 100%
    .scrollWrap
      width 25%
      box-sizing border-box
      border-right 0.01rem solid #ccc
      .scrollUl
        li
          position relative
          margin-top 0.2rem
          text-align center
          &.active::after
            position absolute
            top 0.03rem
            left 0
            content ''
            width 0.03rem
            height 0.25rem
            background-color rgb(171, 43, 43)
          a
            font-size 0.14rem
            color #333
          &.active a
            color rgb(171, 43, 43)
    .goodScrollWrap
      padding 0.15rem
      width 70%
      height 100%
      overflow hidden
      .contentWrap
        float left
        width 100%
        .categoryBox
          margin-bottom 0.2rem
          .categoryTitle
            color #333
            border-bottom 0.01rem solid #d9d9d9
            font-size 0.14rem
            font-weight 700
            margin-bottom 0.12rem
            padding-bottom 0.1rem
        .banner
          width 100%
          height 0.96rem
          margin-bottom 0.16rem
          bakcground-color #eee
          a
            display block
            width 100%
            height 100%
            img
              width 100%
              height 100%
        .goodList
          display flex
          flex-wrap wrap
          // justify-content space-between
          li
            width 0.72rem
            display flex
            flex-direction column
            justify-content space-between
            text-align center
            margin-right 0.17rem
            img
              width 0.72rem
              height 0.72rem
              border-radius 50%
            span
              width 0.72rem
              font-size 0.12rem
              color #333
          li:nth-child(3n)
            margin-right 0
</style>