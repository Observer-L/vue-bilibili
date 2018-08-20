<template>
  <div class="r-con">
    <div class="online">
      <a href="//www.bilibili.com/video/online.html" target="_blank" title="在线观看：3073929">在线人数：2389385</a>
      <em></em>
      <a href="//www.bilibili.com/newlist.html" target="_blank">最新投稿：18905</a>
    </div>
    <div class="adpos" v-if="list.length">
      <a :href="list[0].url" target="_blank">
        <img :src="list[0].pic" width="260" height="150" class="pic">
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'RightContent',
  props: {
    list: Array
  }
}
</script>
<style lang="stylus" scoped>
.popularize-module
  .online
    position relative
    height 34px
    line-height 34px
    padding 0 10px
    border-radius 4px
    text-align center
    background #e5e9ef
    white-space nowrap
    a
      color #6d757a
    em
      display inline-block
      border-left 1px solid #b8c0cc
      height 10px
      line-height 10px
      margin 12px 15px 0
      vertical-align top
  .adpos
    position relative
    width 260px
    height 150px
    margin-top 10px
    overflow hidden
    border-radius 4px
</style>
