<template>
  <ul>
    <li v-for="(item, index) of subnavData" :key="index">
      <a :href="item.url">
        <i :class="['icon-prim', item.icon]" v-if="item.icon"></i>
        <span>
          {{item.name}}
        </span>
      </a>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'SubNav',
  props: {
    subnavData: Object
  }
}
</script>
<style lang="stylus" scoped>
li
  position relative
  overflow hidden
  transition all .2s
  font-size 12px
  line-height 20px
  min-width 120px
  height auto
  text-align left
  &:hover
    background-color #e5e9ef
    &>a
      left 5px
  &>a
    display block
    padding 5px 15px 5px 25px
    margin-right 10px
    background url('~assets/images/base/icons2.png') no-repeat 12px -1613px
    white-space nowrap
    left 0
    color #222
    position relative
    overflow hidden
    transition all .2s
    span
      position relative
      &:after
        content ""
        background url('~assets/images/base/icons2.png') no-repeat 0 -1581px
        display block
        width 15px
        height 18px
        position absolute
        right -100px
        top -3px
        transition all .2s
        opacity 0
.sub-nav:not(.nav-square) li:hover>a span:after
  right -21px
  opacity 1
.nav-square
  ul
    width 107px
    margin-top -6px
    &>li
      min-width 107px
      margin-top 8px
      &:first-child
        margin-top 0
      a
        background none
        padding 2px 10px 2px 18px
  .icon-prim
    width 16px
    height 13px
    margin-right 4px
    margin-top 4px
    vertical-align top
    display inline-block
    background-image url('~assets/images/base/icons.png')
  .icon-vip-buy
    display inline-block
    width 16px
    height 13px
    margin-top 0
    vertical-align inherit
    background-repeat no-repeat
    background-image url('~assets/images/header/buy.png')
    background-position 50%
  .icon-activity
    background-position -280px -1179px
  .icon-game
    background-position -279px -1241px
  .icon-news
    background-position -344px -1178px
  .icon-hy
    background-position -280px -1370px
  .icon-mango
    background-position -280px -1433px
.nav-live
  ul
    float left
    &>li
      min-width 100px

</style>
