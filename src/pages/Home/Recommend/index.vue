<!-- 推荐组件 -->
<template>
  <div>
    <!-- 轮播 -->
    <swiper
      :options="swiperOption"
      :not-next-tick="notNextTick"
      ref="mySwiper"
      class="swiper"
    >
      <!-- slides -->
      <swiper-slide v-for="item in homeList.focusList" :key="item.id">
        <img :src="item.picUrl" alt="" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

    <!-- 三个图标 -->
    <div class="iconBox">
      <div class="iconItem">
        <img src="../images/icon01.png" alt="" />
        <span>网易自营品牌</span>
      </div>
      <div class="iconItem">
        <img src="../images/icon02.png" alt="" />
        <span>30天无忧退货</span>
      </div>
      <div class="iconItem">
        <img src="../images/icon03.png" alt="" />
        <span>48小时急速退款</span>
      </div>
    </div>

    <!-- 十个图标导航 -->
    <van-grid :column-num="5" class="gridBox" v-if="homeList.kingKongModule">
      <van-grid-item
        class="gradItem"
        v-for="item in homeList.kingKongModule.kingKongList"
        :key="item.picUrl"
      >
        <img class="gridImg" :src="item.picUrl" />
        <span>{{ item.text }}</span>
      </van-grid-item>
    </van-grid>

    <!-- 首单零元购 -->
    <div class="firstOrder">
      <div class="floorTop">
        <a href="javascipt:;"><img src="../images/free.gif" alt="" /></a>
      </div>
      <div class="floorTop">
        <a href="javascipt:;"><img src="../images/free2.gif" alt="" /></a>
      </div>
    </div>

    <!-- 新人专享 -->
    <div class="freshmanModule">
      <div class="moduleTitle">新人专享</div>  
      <div class="moduleLeft">
        <div class="moduleLeftTitle">新人专享礼包</div>
           
        <div class="moduleLeftImg">
          <img v-lazy="'https://yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png'" alt="">
        </div>
      </div>
      <div class="moduleRight">
        <Pintuan :imgSrc="'https://yanxuan-item.nosdn.127.net/175db1099efdb8314835ef50a894508b.png?quality=75&type=webp&imageView&thumbnail=200x200'" :title="'福利社'" :subTitle="'今日特标'" :price1="'15.8'" :price2="'19'" backgroundColor= "#FBE2D3"/>
        <Pintuan :imgSrc="'https://yanxuan-item.nosdn.127.net/90beb3162a46d30cfa035217265d5542.png?quality=75&type=webp&imageView&thumbnail=200x200'" :title="'新人拼团'" :subTitle="'1元起包邮'" :price1="'39.9'" :price2="'19'"  backgroundColor= "#FFECC2" :haveBg="true"/>
      </div>
    </div>

    <!-- 类目热销榜 -->
    <HotSale />
    <!-- 爆款 -->
    <div class="popular" v-if="popularList.length">
      <Popular 
        v-for="(popular, index) in popularList" 
        :key="index" 
        :title="popular.styleItem.title"  
        :subTitle="popular.styleItem.desc"
        :picUrlList="popular.styleItem.picUrlList"
      />
      
    </div>

    <!-- 底部 -->
    <IndexFooter />
    
    <div style="height: .51rem"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Pintuan from './pintuan.vue'
import HotSale from './HotSale'
import Popular from './Popular'
import IndexFooter from '@/components/IndexFooter.vue'
export default {
  components: {
    Pintuan,
    HotSale,
    Popular,
    IndexFooter
  },
  data() {
    return {
      notNextTick: true,
      swiperOption: {
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: true,
        // pagination: ".swiper-pagination",
        pagination: {
          el: ".swiper-pagination",
        },
        loop: true, //循环
        paginationClickable: true,
        mousewheelControl: true,
        observeParents: true,
        debugger: true,
      },
    };
  },
  mounted() {},
  methods: {},
  computed: {
    ...mapState({
      homeList: (state) => state.home.homeList,
    }),
    popularList() {
      return this.homeList.sceneLightShoppingGuideModule || []
    }
  },
};
</script>
<style lang="stylus" scoped>
.swiper
  width 100%
  height 1.85rem
  img
    width 100%
    height 1.85rem
  >>> .swiper-pagination-bullet
    width 0.2rem
    height 0.02rem
    background-color #fff
.iconBox
  background-color #fff
  width 100%
  height 0.36rem
  display flex
  justify-content space-around
  .iconItem
    flex 1
    text-align center
    img
      width 0.16rem
      height 0.16rem
      border-radius 50%
      padding-top 0.06rem
      padding-right 0.06rem
    span
      font-size 0.12rem
.gridBox
  .gradItem
    .gridImg
      width 0.55rem
      height 0.55rem
      padding-bottom 0.1rem
      border-radius 0.1rem
      background-color #f4f4f4
    span
      color rgb(51, 51, 51)
      font-size 0.12rem
      line-height 0.18rem
.firstOrder
  display flex
  flex-direction column
  margin-bottom .1rem
  .floorTop
    width 100%
    height 1.6rem
    img
      width 100%
      height 1.6rem
.freshmanModule
  background-color #fff
  overflow hidden
  .moduleTitle
    height .45rem
    line-height .45rem
    width 100%
    padding 0 .15rem
    text-align center
    font-size .16rem
  >div
    width 1.715rem
    height 2.17rem
  .moduleLeft
    float left
    margin-left .15rem
    margin-right .02rem
    background-color #f9e9cf
    .moduleLeftTitle
      padding-top .15rem
      padding-left .15rem
      font-size .16rem
      color #333
    .moduleLeftImg
      width 100%
      height 1.715rem
      position relative
      img
        position absolute
        // top 0
        // left 0
        // right 0
        // bottom 0
        // margin auto
        width 1.29rem
        height 1.29rem
        left 50%
        top 50%
        transform: translate(-50%, -50%)
  .moduleRight
    float left
.popular
  background-color #fff
  padding .05rem .15rem .15rem .13rem
  display flex
</style>