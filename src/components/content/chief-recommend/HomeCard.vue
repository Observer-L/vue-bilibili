<template>
  <div class="groom-module home-card">
    <a :href="'//bilibili.com/video/av' + item.aid" :title="item.title" target="_blank">
      <img :src="item.pic" alt="item.title" width="160" height="100" class="pic">
      <div class="card-mark">
        <p class="title">{{item.title}}</p>
        <p class="author">up主：{{item.author}}</p>
        <p class="play">播放：{{item.play}}</p>
      </div>
    </a>
    <WatchLater :target="item.aid"></WatchLater>
  </div>
</template>
<script>
export default {
  name: 'HomeCard',
  props: {
    item: Object
  }
}
</script>
<style lang="stylus" scoped>
.groom-module
  position relative
  float left
  width 160px
  height 100px
  overflow hidden
  margin 0 0 20px 20px
  border-radius 4px
  background #fff
  .pic
    width 160px
    height 100px
  img
    width 100%
    height 100%
  &:hover
    .card-mark
      top 0
      height 100%
      background rgba(0,0,0,.7)
      .author, .play
        opacity 1
    .w-later
      display block
  .card-mark
    position absolute
    left 0
    top 68px
    width 150px
    font-size 12px
    height 20px
    line-height 20px
    padding 10px 5px
    overflow hidden
    background #000
    background linear-gradient(transparent,rgba(0,0,0,.1) 20%,rgba(0,0,0,.2) 35%,rgba(0,0,0,.6) 65%,rgba(0,0,0,.9))
    .title
      color #fff
      height 40px
      overflow hidden
      margin-bottom 5px
      word-break break-all
      word-wrap break-word
    .author
      opacity 0
      color #99a2aa
      height 20px
      line-height 20px
      overflow hidden
      transition all .6s
    .play
      opacity 0
      color #99a2aa
      height 20px
      line-height 20px
      overflow hidden
      transition all .6s
</style>
