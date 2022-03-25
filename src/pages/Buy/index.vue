<!-- buy组件 -->
<template>
  <div class="buyContainer">
    <BuyHeader :title="title" />
    <!-- 值得买导航 -->
    <div class="swiperTab">
      <div class="swiperTabTitle">
        <img
          src="https://yanxuan.nosdn.127.net/0b7676e645253f84be662aacfc051922.png"
          class="tabTitle"
          alt=""
        />
        <img
          src="https://yanxuan.nosdn.127.net/a93a392fb8006ba26dea38477979b7b4.jpg?imageView"
          class="tabBg"
          alt=""
        />
        <div class="tabText">严选好物 用心生活</div>
      </div>

      <div class="swiper">
        <swiper
          :options="swiperOption"
          :not-next-tick="notNextTick"
          ref="mySwiper"
          class="swiper"
        >
          <swiper-slide v-for="item in navList" :key="item.id">
            <a class="swiperItem">
              <img :src="item.picUrl" alt="" />
              <div class="mainTitle">{{item.mainTitle}}</div>
              <div class="viceTitle">{{item.viceTitle}}</div>
            </a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
    <!-- 瀑布流 -->
    <WaterFall />
  </div>
</template>

<script>
import WaterFall from './waterFail/waterFall.vue'
import BuyHeader from "@/components/BuyHeader.vue";
export default {
  name: "Buy",
  components: {
    BuyHeader,
    WaterFall
  },
  data() {
    return {
      title: "值得买",
      navList: [],
      notNextTick: true,
      swiperOption: {
        // 轮播配置项
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: true,
        // pagination: ".swiper-pagination",
       
        // loop: true, //循环 (多行slide分布的时候不能设置循环 不然分页器会出问题哦)
        paginationClickable: true,
        mousewheelControl: true,
        observeParents: true,
        debugger: true,
        slidesPerView: 4, // 一行有多少个
        slidesPerColumn: 2, // 显示多少行
        slidesPerColumnFill : 'row', // 先横向排列再纵向排列
        // spaceBetween: 20
         pagination: {
          el: ".swiper-pagination",
        },
      },
    };
  },
  mounted() {
    this.getSwiperData();
  },
  methods: {
    async getSwiperData() {
      const res = await this.$api.buy.getBuyNavWap();
      if (res.code === "200") {
        this.navList = res.data.navList;
      }
    },
  },
  computed: {
   
  },
};
</script>
<style lang="stylus" scoped>
.buyContainer
  margin-top .5rem
  .swiperTab
    position relative
    padding-top 0.725rem
    .swiperTabTitle
      position absolute
      top 0
      z-index 1
      .tabTitle
        position absolute
        z-index 2
        left 0.06rem
        top 0.3rem
        width 0.65rem
        height auto
      .tabText
        position absolute
        top 0.3rem
        left 0.73rem
        height 0.44rem
        line-height 0.44rem
        color #fff
        font-size 0.15rem
      .tabBg
        width 3.75rem
        height auto
    .swiper
      position relative
      width 3.55rem
      background-color #fff
      height 2.7rem
      border-radius 0.08rem
      margin 0 auto
      z-index 2
      >>> .swiper-pagination-bullet
        // background-color #d9d9d9
        width .2rem
        height .02rem
        padding 0
        margin 0
      >>> .swiper-pagination-bullet-active
        background-color #dd1a21
      .swiperItem
        display inline-block
        width .84rem
        height 1.005rem
        padding-top .2rem
        img
          width .6rem
          height .6rem
          display block
          margin 0 auto
        .mainTitle
          width .84rem
          font-weight 700
          font-size .14rem 
          color #333
          padding .05rem 0
          text-align center
        .viceTitle
          font-size .12rem
          color #999
          width .84rem  
          text-align center
</style>