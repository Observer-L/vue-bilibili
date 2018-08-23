<!--
spread-module
1. 预览视频（进度条、弹幕、金银标识）
2. 标题下额外信息toggle（播放量、弹幕量）
-->
<template>
<div>
  <div
    class="spread-module"
    @mouseover="showPreview(index)"
    @mouseout="hidePreview"
  >
    <a :href="'//www.bilibili.com/video/av' + item.aid || item.archive.aid" target="_blank">

      <div class="pic">
        <div class="lazy-img">
          <img :alt="item.name" :src="item.pic">
        </div>
        <i v-if="item.stat" :class="['icon medal', corner]"></i>
        <div
          :class="['cover-preview-module', {'show': current === index}]"
        >
          <preview v-if="item.archive || item" :cid="item.aid || item.archive.aid"></preview>
          <div class="progress-bar">
            <!-- todo动画 -->
            <span style="width: 50%"></span>
          </div>
        </div>

        <div class="mask-video"></div>
        <div :class="['danmu-module', {'show': current === index}]">
          <p class="dm">测试预览弹幕</p>
          <p class="dm row2">测试预览弹幕row2</p>
        </div>

        <span class="dur" v-if="item.duration || item.archive" v-html="convertDur(item.duration ? item.duration : item.archive.duration ? item.archive.duration : 0)"></span>

        <WatchLater :target="item.aid || item.archive.aid"></WatchLater>
      </div>

      <p class="t" v-if="item.archive" :title="item.name">{{item.name}}</p>
      <p class="t" :title="item.title">{{item.title}}</p>
      <p class="num" v-if="item.stat">
        <span class="play"><i class="icon"></i>{{item.stat.view | viewFormat}}</span>
        <span class="danmu"><i class="icon"></i>{{item.stat.danmaku}}</span>
      </p>
    </a>
  </div>
</div>
</template>
<script>
import Preview from './Preview'
export default {
  name: 'SpreadCard',
  components: {
    Preview
  },
  props: {
    item: Object,
    index: Number
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
    },
    convertDur (dur) {
      if (dur >= 3600) {
        let hour = Math.floor(dur / 3600)
        let min = Math.floor(dur % 3600 / 60)
        let sec = Math.floor(dur % 3600 % 60)
        min = String(min).length === 1 ? '0' + min : min
        sec = String(sec).length === 1 ? '0' + (sec) : sec
        return `${hour}:${min}:${sec}`
      } else if (dur <= 59) {
        return `00:${dur}`
      } else {
        let min = Math.floor(dur / 60)
        let sec = dur % 60
        min = String(min).length === 1 ? '0' + min : min
        sec = String(sec).length === 1 ? '0' + (sec) : sec
        return `${min}:${sec}`
      }
    }
  },
  computed: {
    corner () {
      const count = this.item.stat.coin || 0
      return count < 2e3 ? '' : count >= 2e3 && count < 1e4 ? 'silvery' : count >= 1e4 ? 'golden' : void 0
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
    .num
      position absolute
      width 100%
      bottom 0
      height 20px
      line-height 20px
      color #99a2aa
      background-color #fff
      transition all .3s
      font-size 0
      span
        line-height 12px
        height 14px
        display inline-block
        width 50%
        overflow hidden
        font-size 12px
        vertical-align bottom
      i
        display inline-block
        width 12px
        height 12px
        vertical-align top
        margin-right 5px
      .play .icon
        background-position -282px -90px
      .danmu .icon
        background-position -282px -218px
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
      .medal
        position absolute
        left 0
        top 0
        width 40px
        height 24px
        pointer-events none
        &.silvery
          background-position -849px -212px
        &.golden
          background-position -849px -148px
    &:hover
      .mask-video
        opacity 1
      .dur
        opacity 1
      .w-later
        display block
      .t
        color #00a1d6
      .num
        bottom -20px
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
