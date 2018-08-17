<template>
  <div class="nav-menu">
    <div class="blur-bg" :style="Bg"></div>
    <div class="nav-mask"></div>
    <div class="bili-wrapper clearfix">
      <div class="nav-con fl">
        <ul>
          <li
            v-for="(item, index) of leftMenuItems"
            :key="index"
            :class="['nav-item', item.type]"
            :report-id="'playpage_' + item.type"
            @mouseover="toggleShow(item.type)"
            @mouseout="toggleShow(item.type)"
          >
            <a :href="item.url" class="t" target="_blank">
              <i v-if="item.icon" class="bili-icon"></i>
              {{item.name}}
            </a>
            <transition name="fade">
              <div
                class="i-frame"
                v-if="item.type === 'live'"
                v-show="isLiveShow"
                style="width: 528px; height: 266px;"
              >
                <iframe src="https://live.bilibili.com/bili/live_hover" frameborder="0" width="100%" height="100%"></iframe>
              </div>
              <div
                class="app-orcode-box"
                v-if="item.type === 'mobile'"
                v-show="isOrcodeShow"
              >
              </div>
            </transition>
          </li>
        </ul>
      </div>
      <div
        class="up-load fr"
        @mouseover="toggleShow('contribution')"
        @mouseout="toggleShow('contribution')"
      >
        <a href="#" target="_blank" class="u-link">投 稿</a>
        <transition name="fade">
          <ul class="up-nav" v-show="isContributionShow">
            <li><a href="#"><i class="bili-icon rect i-art"></i><span>专栏投稿</span></a></li>
            <li><a href="#"><i class="bili-icon rect i-ap"></i><span>音频投稿</span></a></li>
            <li><a href="#"><i class="bili-icon rect i-vp"></i><span>视频投稿</span></a></li>
            <li><a href="#"><i class="bili-icon rect i-vm"></i><span>投稿管理</span></a></li>
            <li><a href="#"><i class="bili-icon rect i-vc"></i><span>创作中心</span></a></li>
          </ul>
        </transition>
      </div>
      <div class="nav-con fr">
        <ul class="fr">
            <li
              v-for="(item, index) of rightMenuItems"
              :class="['nav-item', {'profile-info': item.profile}]"
              :key="index"
              :report-id="'playpage_' + item.type"
              @mouseover="toggleShow(item.name)"
              @mouseout="toggleShow(item.name)"
            >
              <a :href="item.url" class="t" target="_blank">
                <div class="num" v-if="item.num">{{item.num}}</div>
                <template v-if="!item.profile">{{item.name}}</template>
                <div class="i-face" v-if="item.profile">
                  <img :src="item.picURL" class="face">
                </div>
              </a>
              <transition name="fade">
                <div
                  class="profile-m dd-bubble"
                  v-if="item.profile"
                  v-show="isProfileShow"
                >
                  <div class="header-uname"><a href="https://github.com/Observer-L" target="_blank">Observer-L</a></div>
                  <img src="~assets/logo.png">
                </div>

                <vip
                  class="bili-header vip-m dd-bubble"
                  v-if="item.name === '大会员'"
                  v-show="isVipShow"
                >
                </vip>
              </transition>

              <transition name="fade">
                <nav-iframe
                  v-if="item.name === '消息'"
                  v-show="isInfoShow"
                >
                  <iframe src="https://message.bilibili.com/pages/nav/index" frameborder="0" width="100%" height="100%"></iframe>
                </nav-iframe>
                <dynamic-iframe
                  v-if="item.name === '动态'"
                  v-show="isDynamicShow"
                >
                  <iframe src="//t.bilibili.com/pages/nav/index" frameborder="0"></iframe>
                </dynamic-iframe>
              </transition>

              <transition name="fade">
                <list
                  class="watch-later mini-wnd-nav later-wnd dd-bubble"
                  v-if="item.name === '稍后再看' && watchLaterList.records"
                  v-show="isWatchLaterShow"
                  :list="watchLaterList"
                >
                </list>
                <list
                  class="favorites mini-wnd-nav favorite-wnd dd-bubble"
                  v-if="item.name === '收藏夹' && collectionsList.records"
                  v-show="isCollectionShow"
                  :list="collectionsList"
                >
                </list>
                <list
                  class="history-record mini-wnd-nav history-wnd dd-bubble"
                  v-if="item.name === '历史' && historyList.records"
                  v-show="isHistoryShow"
                  key="history"
                  :list="historyList"
                >
                </list>
              </transition>
            </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import NavIframe from './Iframe'
import DynamicIframe from './DynamicIframe'
import List from './List'
import Vip from './Vip'
export default {
  name: 'NavMenu',
  components: {
    NavIframe,
    DynamicIframe,
    List,
    Vip
  },
  data () {
    return {
      Bg: {
        backgroundImage: `url(${require('../../../assets/images/header/banner.png')})`
      },
      leftMenuItems: [
        {
          name: '主站',
          type: 'home',
          url: '#',
          icon: true
        },
        {
          name: '画友',
          type: 'hbili',
          url: '#',
          icon: false
        },
        {
          name: '音频',
          type: 'mbili',
          url: '#',
          icon: false
        },
        {
          name: '游戏中心',
          type: 'game',
          url: '#',
          icon: false
        },
        {
          name: '直播',
          type: 'live',
          url: '#',
          icon: false
        },
        {
          name: '会员购',
          type: 'buy',
          url: '#',
          icon: false
        },
        {
          name: 'BML',
          type: 'nav-bml',
          url: '#',
          icon: false
        },
        {
          name: '下载APP',
          type: 'mobile',
          url: '#',
          icon: true
        }
      ],
      rightMenuItems: [
        {
          name: '账号',
          name_en: 'account',
          url: 'https://github.com/Observer-L',
          picURL: 'https://avatars0.githubusercontent.com/u/28595171?s=460&v=4',
          profile: true
        },
        {
          name: '大会员',
          url: '#'
        },
        {
          name: '消息',
          url: '#',
          num: 1
        },
        {
          name: '动态',
          url: '#',
          num: 6
        },
        {
          name: '稍后再看',
          url: '#'
        },
        {
          name: '收藏夹',
          url: '#'
        },
        {
          name: '历史',
          url: '#'
        }
      ],
      watchLaterList: {},
      collectionsList: {},
      historyList: {},
      isLiveShow: false,
      isOrcodeShow: false,
      isProfileShow: false,
      isVipShow: false,
      isInfoShow: false,
      isDynamicShow: false,
      isWatchLaterShow: false,
      isCollectionShow: false,
      isHistoryShow: false,
      isContributionShow: false
    }
  },
  methods: {
    toggleShow (type) {
      if (type === 'live') {
        this.isLiveShow = !this.isLiveShow
      } else if (type === 'mobile') {
        this.isOrcodeShow = !this.isOrcodeShow
      } else if (type === 'contribution') {
        this.isContributionShow = !this.isContributionShow
      } else if (type === '账号') {
        this.isProfileShow = !this.isProfileShow
      } else if (type === '大会员') {
        this.isVipShow = !this.isVipShow
      } else if (type === '消息') {
        this.isInfoShow = !this.isInfoShow
      } else if (type === '动态') {
        this.isDynamicShow = !this.isDynamicShow
      } else if (type === '稍后再看') {
        this.isWatchLaterShow = !this.isWatchLaterShow
      } else if (type === '收藏夹') {
        this.isCollectionShow = !this.isCollectionShow
      } else if (type === '历史') {
        this.isHistoryShow = !this.isHistoryShow
      }
    },
    bindHover () {
      // console.table(this.leftMenuItems)
    },
    getInfo () {
      this.$axios.get('/api/user/index.json')
        .then(this.getInfoSucc)
    },
    getInfoSucc (res) {
      const data = res.data
      this.historyList = data.history
      this.collectionsList = data.collections
      this.watchLaterList = data.watchlater
    }
  },
  mounted () {
    this.getInfo()
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/mixin.styl'
.bili-header
  .nav-menu
    position relative
    z-index 200
    height 42px
    color #222
    .blur-bg
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      background-position center -10px
      background-repeat no-repeat
      filter blur(4px)
    .nav-mask
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      background-color hsla(0,0%,100%,.4)
      box-shadow 0 1px 2px rgba(0,0,0,.1)
    .nav-con
      .nav-item
        position relative
        float left
        text-align center
        line-height 42px
        height 42px
        background-color hsla(0,0%,100%,0)
        transition all .3s
        .t
          color #222
          height 100%
          display block
          padding 0 8px
          .num
            height 12px
            line-height 12px
            color #fff
            background-color #f25d8e
            border-radius 10px
            position absolute
            padding 1px 2px
            font-size 12px
            top 1px
            right -4px
            min-width 16px
            z-index 30
            text-align center
        .i-frame
          position absolute
          left 0
          top 42px
        &:hover
          background-color hsla(0,0%,100%,.3)
        &.mobile
          .app-orcode-box
            position absolute
            left -20px
            top 42px
            width 259px
            height 174px
            background url(~assets/images/base/orcode-frame.png)
            &:before
              content ""
              position absolute
              width 97px
              height 97px
              left 82px
              top 30px
              background url('~assets/images/base/orcode.png')
        &.home
          margin-left -10px
          padding-left 12px
          a
            padding-left 20px
          i
            position absolute
            width 17px
            height 14px
            left 10px
            top 12px
            background-position -919px -88px
        &.mobile
          padding 0 10px
          i
            width 16px
            height 21px
            background-position -1371px -1175px
            vertical-align middle
          a
            display inline-block
            padding 0
      .profile-info
        width 58px
        &:hover
          background none
          .i-face
            transform scale(1.7) translateY(30%)
            .face
              border 2px solid #fff
        .i-face
          position absolute
          z-index 20
          width 36px
          height 36px
          top 0
          left 11px
          transition .3s ease-in-out
          .face
            width 100%
            height 100%
            border 0 solid #fff
            border-radius 50%
            vertical-align middle
    .up-load
      position relative
      width 58px
      height 42px
      margin-left 8px
      .u-link
        display block
        width 100%
        height 48px
        line-height 42px
        text-align center
        font-size 14px
        color #fff
        background-color #fb7299
        border-radius 0 0 6px 6px
        &:hover
          background-color #ff85ad
      .up-nav
        position absolute
        width 360px
        top 42px
        right 0
        background #fff
        border-radius 0 0 4px 4px
        box-shadow 0 2px 4px rgba(0,0,0,.16)
        overflow hidden
        z-index 1
        li
          position relative
          float left
          width 72px
          height 64px
          cursor pointer
          text-align center
          background #fff
          transition .2s
          &:hover
            background #e5e9ef
            .rect
              transform translateY(-2px)
          a
            display block
            width 100%
            height 100%
            color #f25d8e
            .rect
              display block
              width 20px
              height 20px
              margin 15px auto 2px
              transition .2s
              &.i-art
                background-position -534px -919px
              &.i-ap
                background-position -534px -983px
              &.i-vp
                background-position -471px -919px
              &.i-vm
                background-position -471px -982px
              &.i-vc
                background-position -471px -1751px
    .dd-bubble
      position absolute
      z-index 1
    .profile-m
      top 42px
      left 50%
      width 260px
      margin-left -130px
      padding 50px 0 0
      background #fff
      box-shadow 0 2px 4px rgba(0,0,0,.16)
      border-radius 0 0 4px 4px
      line-height normal
      .header-uname
        font-weight bold
.bili-header
  .mini-wnd-nav
    position absolute
    left 0
    background-color #fff
    width 320px
    box-shadow 0 2px 4px rgba(0,0,0,.16)
    border 1px solid #e5e9ef
    border-radius 0 0 4px 4px
    z-index 200
    &.later-wnd
      left -126px
    &.favorite-wnd
      left -157px
    &.history-wnd
      width 400px
      left auto
      right -58px
    a
      transition color .2s
</style>
