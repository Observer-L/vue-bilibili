<template>
  <div class="bili-header">
    <nav-menu></nav-menu>
  </div>
</template>
<script>
import NavMenu from './NavMenu.vue'
export default {
  name: 'Header',
  components: {
    NavMenu
  }
}
</script>
<style lang="stylus" scoped>
.bili-header
  position relative
  background #eee
</style>
