<template>
  <div class="bili-wrapper">
    <!-- 顶部推荐区 -->
    <chief-recommend></chief-recommend>
    <!-- 推广 -->
    <home-popularize></home-popularize>
    <!-- 直播 -->
    <live></live>
    <!-- 主楼层 -->
    <floor></floor>
    <!-- 底部推荐区 -->
    <special-recommend></special-recommend>
  </div>
</template>
<script>
import ChiefRecommend from './chief-recommend/ChiefRecommend'
import HomePopularize from './popularize/HomePopularize'
import Live from './live/Live'
import Floor from './Floor'
import SpecialRecommend from './SpecialRecommend'
export default {
  name: 'BiliContent',
  components: {
    ChiefRecommend,
    HomePopularize,
    Live,
    Floor,
    SpecialRecommend
  }
}
</script>
<style lang="stylus" scoped>

</style>
