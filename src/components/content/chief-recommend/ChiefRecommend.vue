<template>
  <div class="chief-recommend-module clearfix">
    <carousel></carousel>
    <recommend></recommend>
  </div>
</template>
<script>
import Carousel from './Carousel'
import Recommend from './Recommend'
export default {
  name: 'ChiefRecommend',
  components: {
    Carousel,
    Recommend
  }
}
</script>
<style lang="stylus" scoped>
.chief-recommend-module
  padding-bottom 40px
</style>
