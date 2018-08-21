<template>
  <div class="r-con">
    <div class="bili-tab">
      <div
        v-for="(item, index) of ['直播排行', '关注的主播', '为你推荐']"
        :key="index"
        :class="['bili-tab-item', {'on': current === index}]"
        @click="switchTab(index)"
      >
        {{item}}
      </div>
    </div>
    <div class="tab-box">
      <div class="tab-con clearfix" ref="tabContent">
        <div class="tab-item rank">
          <div
            class="r-item"
            v-for="(item, index) of ranking"
            :key="index"
          >
            <span class="number">{{index + 1}}</span>
            <a :href="item.link" target="_blank" class="preview">
              <div class="lazy-img">
                <img :src="item.face">
              </div>
            </a>
            <a :href="item.link" target="_blank">
              <div class="r-i">
                <div class="r-i-t">
                  <span class="u-name">{{item.uname}}</span>
                  <span class="u-online">
                    <i></i>
                    <em>{{item.online}}</em>
                  </span>
                </div>
                <div :title="item.title" class="r-i-st">{{item.title}}</div>
              </div>
            </a>
          </div>
        </div>
        <div class="tab-item">
          <div class="load-state">
            <!-- 此处写死，需要动态获取请查阅api文件 -->
            <span class="empty">没有数据(-_-#)</span>
          </div>
        </div>
        <div class="tab-item tuijian">
          <base-carousel :list="preview"></base-carousel>
          <div class="anchor clearfix">
            <a target="_blank" href="//h.bilibili.com" class="pic fl">
              <img src="~assets/images/content/photography.png" alt="有文画">
            </a>
            <a target="_blank" href="//vc.bilibili.com" class="pic fr">
              <img src="~assets/images/content/shortvideo.png" alt="小视频">
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BaseCarousel from 'common/carousel/BaseCarousel'
export default {
  name: 'LiveRcon',
  components: {
    BaseCarousel
  },
  props: {
    ranking: Array,
    preview: Array
  },
  data () {
    return {
      current: 2
    }
  },
  methods: {
    switchTab (index) {
      this.current = index
      this.$refs.tabContent.style.marginLeft = `-${index * 260}px`
    }
  },
  mounted () {
    this.switchTab(this.current)
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

.tab-box
  margin-top 20px
  overflow hidden
  .tab-con
    width 780px
    transition all .3s
    &:before
      content ""
      display table
    .tuijian
      border-radius 4px
      overflow hidden
      .anchor .pic
        margin-top 20px
        display inline-block
      & >>> .slider-box
        height 248px
        .slider
          .title
            height 51px
            line-height 30px
            font-size 12px
            a
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
          .panel
            .trig
              bottom 0
              right 0
              width 100%
              text-align center
              padding 5px 0
              background rgba(0,0,0,.4)
              span
                height 6px
    .tab-item
      width 260px
      float left
      .r-item
        overflow hidden
        position relative
        margin 0 0 14px
        .r-i
          float left
          width 205px
        .r-i-t
          line-height 16px
          overflow hidden
          .u-name
            max-width 135px
            float left
            color #222
            overflow hidden
            white-space nowrap
            text-overflow ellipsis
          .u-online
            max-width 60px
            float right
            color #99a2aa
            line-height 16px
            overflow hidden
            white-space nowrap
            text-overflow ellipsis
            i
              display inline-block
              vertical-align middle
              width 12px
              height 12px
              margin-top -2px
              margin-right 3px
              background url('~assets/images/content/view.png') no-repeat
        .r-i-st
          margin-top 4px
          color #99a2aa
          overflow hidden
          white-space nowrap
          text-overflow ellipsis
          max-width 190px
        .number
          position absolute
          color #fff
          height 18px
          line-height 18px
          top 0
          left 0
          font-size 12px
          min-width 12px
          text-align center
          background-color #b8c0cc
          z-index 20
          border-radius 4px
          padding 0 3px
          font-weight bolder
          float left
          margin-right 6px
        .preview
          display block
          float left
          position relative
          margin-right 12px
          width 40px
          height 40px
          border-radius 50%
          overflow hidden
          img
            width 40px
            height 40px
        &:first-child, &:nth-child(2), &:nth-child(3)
          .number
            background-color #f25d8e
      &.rank
        .r-item
          padding-left 25px
          .r-i
            width 180px
.load-state
  text-align center
  padding 10px 0
  color #99a2aa
  height 100%
  display table
  width 100%
  span
    vertical-align middle
    display table-cell
    &:before
      text-align center
      content ""
      display inline-block
      vertical-align middle
      width 20px
      height 20px
      background-image url('~assets/images/base/empty-icon.png')
      background-repeat no-repeat
      margin-right 5px
      margin-top -3px
  .empty
    &:before
      background-position center -598px

// .tuijian >>> .slider .title
//   height 51px !important
//   line-height 30px !important
//   font-size 12px !important
</style>
