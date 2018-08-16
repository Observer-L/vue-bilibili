<template>
  <div class="i-frame">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'DynamicIframe'
}
</script>
<style lang="stylus" scoped>
.i-frame
  position absolute
  width 380px
  height 422px
  top 100% !important
  left calc(50% - 190px) !important
  background transparent
  border-radius 0 0 4px 4px
  overflow hidden
  iframe
    overflow hidden
    width 380px
    height 422px
    background transparent
</style>
