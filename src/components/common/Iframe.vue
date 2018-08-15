<template>
  <div class="i-frame">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Iframe'
}
</script>
<style lang="stylus" scoped>
.i-frame
  position absolute
  width 110px
  height 210px
  top 100% !important
  left calc(50% - 55px) !important
  background transparent
  box-shadow rgba(0, 0, 0, 0.16) 0px 2px 4px
  border-radius 0 0 4px 4px
  overflow hidden
</style>
