<template>
  <div class="app">
    <router-view></router-view>
    <FootGrade />
  </div>
</template>

<script>
import FootGrade from "@/components/FootGrade.vue";
export default {
  components: {
    FootGrade,
  },
  data() {
    return {};
  },
};
</script>
<style lang="stylus" scope>
  .app
    background-color #eee
    // margin-bottom .51rem
    height 100vh
</style>