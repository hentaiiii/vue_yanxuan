<!-- 热销榜单 -->
<template>
  <div class="hotSale">
    <div class="title">类目热销榜</div>
    <div class="mainList" v-if="mainListData.length">
      <MainList v-for="(item, index) in mainListData" :key="index" :imgSrc="item.picUrl" :title="item.categoryName" :bgColor="item.bgColor"/>
    </div>
    <div class="otherList">
      <OtherList v-for="(item, index) in otherMainListData" :key="index" :title="item.categoryName" :imgSrc="item.picUrl" />
    </div>
  </div>
</template>

<script>
import MainList from "./MainList.vue";
import OtherList from './OtherList.vue'
import {mapState} from 'vuex'
export default {
  name: 'HotSale',
  components: {
    MainList,
    OtherList
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      homeList: state => state.home.homeList
    }),
    mainListData() {
      if(this.homeList.categoryHotSellModule) {
        let tempArr = this.homeList.categoryHotSellModule.categoryList.slice(0,2)
        tempArr[0].bgColor = '#F9F3E4'
        tempArr[1].bgColor = '#EBEFF6'
        return tempArr
      } else {
        return []
      }
      
    },
    otherMainListData() {
       if(this.homeList.categoryHotSellModule) {
        return this.homeList.categoryHotSellModule.categoryList.slice(2)
      } else {
        return []
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
.hotSale
  background-color #fff
  margin 0.1rem 0
  padding 0 0.1rem .1rem .15rem
  .title
    height 0.5rem
    line-height 0.5rem
    font-size 0.16rem
  .mainList
    display flex
  .otherList
    overflow hidden  
</style>