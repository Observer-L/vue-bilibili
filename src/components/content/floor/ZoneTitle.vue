<template>
<div class="zoon-title">
  <div class="headline clearfix">
    <i :class="['icon icon_t', 'icon-' + cat]"></i>
    <a :href="'//bilibili.com/v/' + cat" class="name">{{name}}</a>
    <Tabs :tabs="tabs"></Tabs>
    <Btn type="link-more" :link="'//bilibili.com/v/' + cat"></Btn>
  </div>
</div>
</template>
<script>
export default {
  name: 'Floor',
  data () {
    return {
      tabs: ['有新动态', '最新投稿']
    }
  },
  props: {
    cat: String,
    name: String
  }
}
</script>
<style lang="stylus" scoped>
.zoon-title
  padding-right 20px
  .headline
    padding 0 0 15px
    .icon_t
      width 40px
      height 40px
      margin-right 10px
      vertical-align middle
      float left
      margin-top -10px
      &.icon-kichiku
        background-position -141px -332px
      &.icon-bangumi
        background-position -141px -140px
      &.icon-douga
        background-position -141px -908px
      &.icon-music
        background-position -140px -266px
      &.icon-dance
        background-position -141px -461px
      &.icon-game
        background-position -141px -203px
      &.icon-technology
        background-position -141px -525px
      &.icon-life
        background-position -137px -970px
      &.icon-fashion
        background-position -141px -718px
      &.icon-ad
        background-position -140px -1228px
      &.icon-ent
        background-position -141px -1032px
      &.icon-movie
        background-position -141px -396px
      &.icon-teleplay
        background-position -141px -845px
      &.icon-recommend
        background-position -141px -780px
      &.icon-cinephile
        background-position -140px -1356px
      &.icon-documentary
        background-position -140px -1292px
    .name
      font-size 24px
      line-height 24px
      font-weight 400
      margin-right 20px
      float left
      color #222
      &:hover
        color #00a1d6
</style>
