<template>
  <div class="bili-tab">
    <div
    v-for="(item, index) of tabs"
    :key="index"
    :class="['bili-tab-item', {'on': current === index}]"
    @click="!hover && switchTab(index)"
    @mouseenter="hover && switchTab(index)"
    >
      {{item}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'Tabs',
  props: {
    tabs: Array,
    hover: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      current: 0
    }
  },
  methods: {
    switchTab (index) {
      this.current = index
      this.$emit('switch-tabs', this.current)
    }
  }
}
</script>
<style lang="stylus" scoped>
.bili-tab
  overflow hidden
  zoom 1
  .bili-tab-item
    float left
    position relative
    height 20px
    line-height 20px
    cursor pointer
    padding 1px 0 2px
    border-bottom 1px solid transparent
    margin-left 12px
    transition .2s
    transition-property border, color
    &:hover
      color #00a1d6
    &:before
      content ""
      display none
      position absolute
      left 50%
      margin-left -3px
      bottom 0
      width 0
      height 0
      border 3px dashed #00a1d6
      border-bottom-style solid
      border-top 0
      border-left-color transparent
      border-right-color transparent
    &:first-child
      margin-left 0
    &.on
      background-color transparent
      border-color #00a1d6
      color #00a1d6
      &:before
        display block
.new-comers-module
  .bili-tab
    float left
    margin 0 10px 0 0

</style>
