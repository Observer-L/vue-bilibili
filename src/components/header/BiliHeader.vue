<template>
  <div class="bili-header">
    <nav-menu></nav-menu>
    <banner></banner>
  </div>
</template>
<script>
import NavMenu from './nav-menu/NavMenu.vue'
import Banner from './banner/HeadBanner.vue'

export default {
  name: 'Header',
  components: {
    NavMenu,
    Banner
  }
}
</script>
<style lang="stylus" scoped>
.bili-header
  position relative
  background #eee
</style>
