<template>
  <ul class="nav-menu">
  <template v-for="(item, index) of items">
    <li :class="item.type" :key="index">

      <a :href="item.url" v-if="item.type !== 'side-nav'">
        <div class="num-wrap" v-if="item.num">
          <span>{{item.num}}</span>
        </div>
        <div class="nav-name">{{item.name}}</div>
      </a>

      <a
        v-else
        :href="item.url"
        class="side-link"
      >
        <i :class="item.icon"></i>
        <span>{{item.name}}</span>
      </a>
      <template v-if="item.subnav">
        <sub-nav class="sub-nav" :subnavData="item.subnav" v-if="item.type !== 'side-nav'"></sub-nav>

        <div v-else :class="['sub-nav','nav-' + item.icon]">
          <sub-nav :subnavData="item.subnav"></sub-nav>
          <div :class="[item.icon + '-field', {'fl': item.icon === 'live'}]">
            <template v-if="item.icon === 'square'">
              <div>
                <a href="//www.bilibili.com/blackboard/activity_list.html" target="_blank" title="bilibili 活动">
                  <div class="lazy-img">
                    <img alt="" src="~assets/images/header/activities.png">
                  </div>
                </a>
              </div>
              <div>
                <a href="//www.bilibili.com/blackboard/activity_list.html" target="_blank" title="bilibili 活动">
                  <div class="lazy-img">
                    <img alt="" src="~assets/images/header/topics.png">
                  </div>
                </a>
              </div>
            </template>
            <template v-else>
              <a target="_blank" href="//h.bilibili.com" class="pic">
                <img src="//s1.hdslb.com/bfs/static/jinkela/home/images/wh2.png" alt="有文画">
              </a>
              <a target="_blank" href="//vc.bilibili.com" class="pic">
                <img src="//s1.hdslb.com/bfs/static/jinkela/home/images/sp2.png" alt="小视频">
              </a>
            </template>
          </div>
        </div>
      </template>
    </li>
  </template>
</ul>
</template>
<script>
import SubNav from './SubNav'
export default {
  name: 'MenuItem',
  components: {
    SubNav
  },
  data () {
    return {
      items: {}
    }
  },
  methods: {
    getNavInfo () {
      this.$axios.get('/api/primary-nav.json')
        .then(this.getNavInfoSucc)
    },
    getNavInfoSucc (res) {
      this.items = res.data
    }
  },
  mounted () {
    this.getNavInfo()
  }
}
</script>
<style lang="stylus" scoped>
.nav-menu
  position relative
  z-index 200
  height 42px
  color #222
  .channel.on
    color #00a1d6
    &:after
      content ""
      position absolute
      width 100%
      height 2px
      background #00a1d6
      bottom -3px
    .nav-name
      color #00a1d6
  &>li
    float left
    display block
    position relative
    margin-right 0
    &:hover
      .sub-nav
        display block
    &>a:not(.side-link)
      width 48px
      text-align center
      display block
      .nav-name
        display inline-block
        vertical-align middle
        color #222
        font-size 12px
        height 40px
        padding-top 8px
        line-height 50px
      .num-wrap
        position absolute
        top 8px
        left 0
        height 14px
        width 100%
        text-align center
        span
          display inline-block
          padding 1px 3px
          line-height 14px
          height 12px
          max-width 28px
          color #fff
          font-size 12px
          vertical-align top
          transform scale(.85)
          background-color #ffafc9
          border-radius 3px
          font-family sans-serif

  li
    &.home
      margin-right 9px
    &.home>a
      width auto
      background url('~assets/images/base/icons.png') -660px -1170px no-repeat
      .nav-name
        position relative
        top 15px
        line-height 20px
  .sub-nav
    display none
    position absolute
    left 0
    overflow hidden
    top 44px
    background #fff
    border-top 0
    box-shadow 0 2px 4px rgba(0,0,0,.16)
    border-radius 0 0 4px 4px
    z-index 2
  .side-nav
    margin 0 4px
    width 40px
    text-align center
    .side-link
      display inline-block
      position relative
      overflow hidden
      zoom 1
      span
        display block
        color #222
        margin 0
        font-size 12px
      &:hover
        span
          color #00a1d6
      i
        display block
        width 18px
        height 18px
        margin 3px auto 2px
        background url('~assets/images/base/icons.png')
        &.square
          background-position -87px -2006px
        &.zhuanlan
          background-position -87px -1814px
        &.live
          background-position -87px -1878px
        &.blackroom
          background-position -87px -1942px
    .nav-square
      padding-top 20px
      padding-bottom 20px
      white-space nowrap
      width 387px
      height 188px
      .square-field
        position absolute
        top 20px
        right 0
        display block
        width 240px
        height 188px
        padding 0 20px 0 19px
        border-left 1px solid #e5e9ef
        &>div
          margin-top 20px
          &:first-child
            margin-top 0
        a
          color #222
          line-height normal
          display block
        img
          width 240px
          height 84px
          border-radius 4px
    .nav-live
      width 350px
      padding 10px 0
      .live-field
        padding-left 20px
        width 210px
        height 250px
        border-left 1px solid #e5e9ef
        .pic
          display inline-block
          margin-bottom 20px
          img
            border none
            vertical-align middle
</style>
