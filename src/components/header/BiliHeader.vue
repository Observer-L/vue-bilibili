<template>
  <div class="bili-header">
    <nav-menu></nav-menu>
    <banner></banner>
    <primary-menu></primary-menu>
  </div>
</template>
<script>
import NavMenu from './nav-menu/NavMenu.vue'
import Banner from './banner/HeadBanner.vue'
import PrimaryMenu from './primary-menu/PrimaryMenu'
export default {
  name: 'Header',
  components: {
    NavMenu,
    Banner,
    PrimaryMenu
  }
}
</script>
<style lang="stylus" scoped>
.bili-header
  font 12px Helvetica Neue,Helvetica,Arial,Microsoft Yahei,Hiragino Sans GB,Heiti SC,WenQuanYi Micro Hei,sans-serif
  position relative
  background #fff
  z-index 10000
</style>
