<!--
card-live-module
-->
<template>
<div>
  <div
    class="card-live-module"
    v-for="(item, index) of list"
    :key="index"
  >
    <a
      :href="item.link"
      target="_blank"
    >
    <div class="pic">
      <div class="lazy-img">
        <img :alt="item.title" :src="item.pic">
      </div>
      <div class="snum">
        <span class="auther">{{item.uname}}</span>
        <span class="online"><i></i>{{item.online}}</span>
      </div>
      <div
        class="mask"
        :style="{'background-image': `url(https://i0.hdslb.com/bfs/live/${item.roomid}.jpg@.webp?08211055)`}"
      ></div>
    </div>
    <p class="t" :title="item.title">{{item.title}}</p>
    <p class="num">{{item.area_v2_parent_name}} · {{item.area_v2_name}}</p>
    </a>
  </div>
</div>
</template>
<script>
export default {
  name: 'LiveCard',
  props: {
    list: Array
  }
}
</script>
<style lang="stylus" scoped>
.card-live-module
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
  .num
    position absolute
    width 100%
    bottom 0
    height 20px
    line-height 20px
    color #9ba3ab
    background-color #fff
    transition all .3s
  .pic
    position relative
    width 160px
    height 100px
    display block
    overflow hidden
    text-align center
    border-radius 4px
    .snum
      position absolute
      bottom 0
      height 34px
      width 100%
      background rgba(0,0,0,.5)
      background linear-gradient(transparent,transparent,rgba(0,0,0,.5))
      span
        position absolute
        display inline-block
        overflow hidden
        width 47%
        height 20px
        line-height 20px
        font-size 12px
        color #fff
        font-weight 200
        vertical-align bottom
      .auther
        white-space nowrap
        text-overflow ellipsis
        left 4px
        bottom 0
        text-align left
      .online
        right 4px
        text-align right
        bottom 0
        i
          display inline-block
          width 13px
          height 10px
          vertical-align baseline
          margin-right 5px
          background url('~assets/images/content/people.png')
    .mask
      opacity 0
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      border-radius 4px
      background-repeat no-repeat
      border-color #000
      background-position 50%
      background-size contain
      transition opacity .3s
  &:hover
    .mask
      opacity 1
    .t
      color #00a1d6
    .num
      bottom -20px
</style>
