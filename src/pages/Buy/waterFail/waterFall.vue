<!-- 瀑布流 -->
<template>
  <div class="containerWaterFall">
    <!--  @scroll="scroll" -->
    <waterfall
      :col="col"
      :data="lookList"
      :height="'100px'"
      @loadmore="loadmore"
      @scroll="scroll"
    >
      <!-- @click="handelRouter(item.id)" -->
      <template>
        <div class="waterFallItem" v-for="look in lookList" :key="look.topicId">
          <img v-lazy="look.picUrl" alt="" class="lookPic" />
          <div class="lookTitle">{{look.title}}</div>
          <div class="lookDesc">
            <div class="avatar"><img :src="look.avatar" alt=""></div>
            <div class="nickName">{{look.nickname}}</div>
            <div class="readCount">
              <img :src="'https://yanxuan.nosdn.127.net/5097bc5f2e1eb15f2a32b56895db073a.png'" alt="">
              <span>{{look.readCount}}</span>
            </div>
          </div>
        </div>
      </template>
    </waterfall>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lookList: [],
      col: 2,
      page: 1,
    };
  },
  mounted() {
    this.getWaterFallData();
  },
  computed: {
  },
  methods: {
    scroll(data) { // 滑动瀑布容器的时候触发
      if(data.scrollTop > this.page * 1400) {
        this.page += 1
        this.getWaterFallData(this.page)
      }
    },
    loadmore() {
      // 这个搞不定
      console.log('loadmore触发了啊')
    },
    async getWaterFallData() {
      const res = await this.$api.buy.getBuyMenu(this.page);
      if (res.code === "200") {
        const tempData = res.data.result;
        let tempArr = [];
        // 处理数据
        tempData.forEach((item) => {
          item["topics"].forEach((item2) => {
            tempArr.push(item2);
          })
          tempArr.push(item["look"])
        });
        this.lookList = [...this.lookList, ...tempArr];
      }
    },
  },
};
</script>
<style lang="stylus" scoped>
.containerWaterFall
  padding .15rem .1rem
  padding-bottom 0
  .vue-waterfall 
    // display flex
    .vue-waterfall-column
      width 1.725rem
      .waterFallItem
        background-color #fff
        width 1.725rem
        box-sizing border-box
        margin-top .1rem
        .lookPic
          width 1.725rem
          height 1.725rem
          // height auto
          border-radius .08rem
        .lookTitle
          box-sizing border-box
          padding .09rem .08rem
          width 1.715rem
          font-size .14rem
          font-weight 700
        .lookDesc
          display flex
          align-items center
          line-height .24rem
          .avatar
            width .24rem
            height .24rem
            img 
              width 100%
              height 100%
              border-radius 50%
              vertical-align top
          .nickName
            font-size .12rem
            height .24rem
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
            margin-left .04rem
            color #7f7f7f
          .readCount
            font-size .12rem
            height .24rem
            flex 1
            text-align right
            padding-right .1rem
            img
              width .16rem
              height .16rem
              padding-bottom .04rem
</style>