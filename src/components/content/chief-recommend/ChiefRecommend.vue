<template>
  <div class="chief-recommend-module clearfix">
    recommend
    <carousel></carousel>
  </div>
</template>
<script>
import Carousel from './Carousel'
export default {
  name: 'ChiefRecommend',
  components: {
    Carousel
  }
}
</script>
<style lang="stylus" scoped>
.chief-recommend-module
  padding-bottom 40px
</style>
