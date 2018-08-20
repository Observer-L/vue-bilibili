<!--
card-live-module
-->
<template>
  <div class="card-live-module" @mouseout="hidePreview">
    {{list}}
  </div>
</template>
<script>
export default {
  name: 'LiveCard',
  props: {
    list: Array
  },
  data () {
    return {
      current: null
    }
  },
  methods: {
    showPreview (index) {
      this.current = index
    },
    hidePreview () {
      this.current = null
    }
  }
}
</script>
<style lang="stylus" scoped>
.storey-box
  .spread-module
    position relative
    float left
    width 160px
    height 148px
    font-size 12px
    overflow hidden
    margin 0 20px 20px 0
    .t
      padding-top 8px
      height 40px
      line-height 20px
      transition all .2s linear
      color #222
      word-wrap break-word
      word-break break-all
      overflow hidden
      text-align left
    .pic
      position relative
      width 160px
      height 100px
      display block
      overflow hidden
      text-align center
      border-radius 4px
      img
        margin 0 auto
        outline 0
      .mask-video
        opacity 0
        position absolute
        top 0
        left 0
        width 100%
        height 100%
        background rgba(0,0,0,.2)
        transition opacity .3s
      .dur
        opacity 0
        position absolute
        bottom 2px
        left 6px
        color #fff
        height 12px
        line-height 12px
        padding 0 5px 1px 0
        transition all .3s
    &:hover
      .mask-video
        opacity 1
      .dur
        opacity 1
      .w-later
        display block
      .t
        color #00a1d6
      // todo动画
      .dm
        left 0%
.cover-preview-module
  opacity 0
  position absolute
  left 0
  top 0
  width 100%
  height 100%
  transition opacity .3s
  &.show
    opacity 1
  .cover
    position absolute
    left 0
    top 7px
    height 98px
    width 100%
    margin-top 2px
  .progress-bar
    position absolute
    left 0
    top 0
    width 100%
    height 10px
    border-width 4px 8px
    border-style solid
    border-color #000
    background #444
    box-sizing border-box
    span
      display block
      background #fff
      height 2px
.danmu-module
  position absolute
  left 0
  top 0
  width 100%
  height 100%
  opacity 0
  transition all .3s
  pointer-events none
  &.show
    opacity 1
  .dm
    position absolute
    color #fff
    left 100%
    top 8px
    white-space pre
    text-shadow 1px 1px 2px #001
    transition left 5s
    &.row2
      top 25px
</style>
