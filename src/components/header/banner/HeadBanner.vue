<template>
  <div class="head-banner" :style="Bg">
    <div class="head-content bili-wrapper">
      <p class="head-title">{{title}}</p>
      <search></search>
      <a href="//www.bilibili.com" class="head-logo" :style="headLogo"></a>
    </div>
    <a :href="bannerLink" target="_blank" class="banner-link"></a>
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
      },
      title: 'もう夏だ！',
      bannerLink: 'https://www.bilibili.com/blackboard/activity-rJDbdpQyQ.html'
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
  &:hover
    .head-content
      .head-title
        opacity 1
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
    .head-title
      position absolute
      top 114px
      left 255px
      line-height 20px
      padding 6px 10px
      background-color rgba(0,0,0,.68)
      color #fff
      border-radius 4px
      font-size 14px
      max-width 350px
      opacity 0
      transition all .2s
  .banner-link
    position absolute
    left 0
    top 0
    height 100%
    width 100%
</style>
