<template>
  <div class="bili-wrapper">
    <!-- 顶部推荐区 -->
    <chief-recommend></chief-recommend>
    <!-- 推广 -->
    <home-popularize></home-popularize>
    <!-- 直播 -->
    <live></live>
    <!-- 主楼层 -->
    <template v-for="(row, index) of rows">
      <floor :category="sortKeys[index]" :categoryId="sortIds[index]" :row="row" :key="index" :id="'bili_' + row.category"></floor>
    </template>
    <!-- 底部推荐区 -->
    <special-recommend></special-recommend>
  </div>
</template>
<script>
import ChiefRecommend from './chief-recommend/ChiefRecommend'
import HomePopularize from './popularize/HomePopularize'
import Live from './live/Live'
import Floor from './floor/Floor'
import SpecialRecommend from './SpecialRecommend'

import { mapGetters } from 'vuex'
export default {
  name: 'BiliContent',
  components: {
    ChiefRecommend,
    HomePopularize,
    Live,
    Floor,
    SpecialRecommend
  },
  computed: {
    ...mapGetters([
      'requesting',
      'error',
      'rows',
      'sortKeys',
      'sortIds'
    ])
  },
  mounted () {
    this.$store.dispatch('getContentRows')
  }
}
</script>
<style lang="stylus" scoped>
.zone-wrap-module
  padding-bottom 30px
.popularize-module
  padding-bottom 15px
</style>
