<template>
  <div class="storey-box clearfix">
    <div
      class="spread-module"
      v-for="(item, index) of list"
      :key="index"
      @mouseover="showPreview(index)"
      @mouseout="hidePreview"
    >
      <a :href="'//www.bilibili.com/video/av' + item.archive.aid" target="_blank">
        <div class="pic">
          <div class="lazy-img">
            <img :alt="item.name" :src="item.pic">
          </div>

          <div
            :class="['cover-preview-module', {'show': current === index}]"
          >
            <div
              class="cover"
              :style="{
                backgroundImage: `url(https://i3.hdslb.com/bfs/videoshot/${item.archive.cid}.jpg@.webp?vsign=6efbf9b54404085c3d8ed2f2f7d1fd75842de3ed&ver=101640070)`,
                backgroundPosition: '0px 0px',
                backgroundZize: '1600px'
                }"
              >
              <!-- todo动画 -->
            </div>
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
          <span class="dur" v-html="convertDur(item.archive.duration)"></span>
          <div class="watch-later-trigger w-later"></div>
        </div>
        <p class="t" :title="item.name">{{item.name}}</p>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'StoreyBox',
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
  }
}
</script>
<style lang="stylus" scoped>
.storey-box
  height 168px
  overflow hidden
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
