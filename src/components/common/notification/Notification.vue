<template>
  <div class="notify">
    <ul class="notify-list">
      <li>
        <span class="icon">通知</span>
        <slot></slot>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Notification'
}
</script>
<style lang="stylus" scoped>
@import '~styles/mixin.styl'
.notify
  border-top 1px solid #f0f0f0
  padding 11px 0 4px
  .notify-list
    font-size 12px
    li
      margin-top 18px
      line-height 16px
      ellipsis()
      .icon
        display inline-block
        width 32px
        height 16px
        line-height 16px
        margin-right 6px
        box-sizing border-box
        border 1px solid #fb7299
        border-radius 3px
        color #fb7299
        text-align center
        -webkit-box-sizing border-box
      &:first-child
        margin-top 0
      a
        color #222
</style>
