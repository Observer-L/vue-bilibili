<template>
  <div class="head-banner" :style="Bg">
    <div class="head-content bili-wrapper">
      <search></search>
      <a href="//www.bilibili.com" class="head-logo" :style="headLogo"></a>
    </div>
  </div>
</template>
<script>
import Search from './Search'
export default {
  name: 'HeadBanner',
  components: {
    Search
  },
  data () {
    return {
      Bg: {
        backgroundImage: `url(${require('../../../assets/images/header/banner.png')})`
      },
      headLogo: {
        backgroundImage: `url(${require('../../../assets/images/header/head-logo.png')})`
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.head-banner
  position relative
  z-index 199
  height 170px
  margin-top -42px
  background #eee
  background-position center -10px
  background-repeat no-repeat
  .head-content
    position relative
    height 170px
    .head-logo
      position absolute
      width 220px
      height 105px
      left 24px
      top 55px
      background transparent no-repeat 0
      z-index 10
</style>
