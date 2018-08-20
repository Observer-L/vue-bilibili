<template>
  <div class="headline clearfix">
    <i class="icon icon_t icon-promote"></i>
    <span class="name">推广</span>
  </div>
</template>
<script>
export default {
  name: 'HeadLine'
}
</script>
<style lang="stylus" scoped>
.headline
  padding 0 0 15px
  .name
    font-size 24px !important
    line-height 24px
    font-weight 400
    margin-right 20px
    float left
  .icon_t
    width 40px
    height 40px
    margin-right 10px
    vertical-align middle
    float left
    margin-top -10px
    &.icon-promote
      background-position -141px -75px
</style>
