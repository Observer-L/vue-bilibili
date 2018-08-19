<template>
  <div class="bili-wrapper">
    <div class="primary-menu">
      <nav-menu></nav-menu>
      <div class="gif-menu nav-gif">
        <a class="random-p" href="https://www.bilibili.com/blackboard/activity-haoxiangyin-pc.html#/" target="_blank">
          <img src="~assets/images/header/menuGIF.gif">
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import NavMenu from './NavMenu'
export default {
  name: 'PrimaryMenu',
  components: {
    NavMenu
  }
}
</script>
<style lang="stylus" scoped>
.primary-menu
  position relative
  width 980px
  height 50px
  margin 0 auto
  padding 8px 0 0
  margin-bottom 4px
  z-index 99
  border-bottom 1px solid #e5e9ef
  .gif-menu
    position absolute
    right 0
    top 0
    height 50px
    padding 4px 0
    .random-p
      display inline-block
      width 69px
      height 40px
      vertical-align top
      margin 3px 0
      overflow hidden
      img
        width 100%
        height 100%
        margin 0 auto
        border-radius 3px
</style>
