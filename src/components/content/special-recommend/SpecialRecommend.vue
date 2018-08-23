<template>
  <div class="special-recommend-module clearfix">
    <div class="l-con">
      <head-line cat="special" text="特别推荐"></head-line>
      <div class="storey-box clearfix">
        <template v-for="(item, index) of specialRecommend">
          <div class="special-module special" :key="index">
            <a :href="'//bilibili.com/av' + item.aid" target="_blank" class="pic">
              <div class="pic-box">
                <div class="lazy-img">
                  <img :src="item.pic" :alt="item.title">
                </div>
                <WatchLater :target="item.aid"></WatchLater>
              </div>
              <p :title="item.title" class="title">{{item.title}}</p>
            </a>
            <div class="user">
              <a :href="'//space.bilibili.com/' + item.last_recommend[0].mid" target="_blank">
                <div class="lazy-img face">
                  <img :src="item.last_recommend[0].face">
                </div>
                <span class="name">{{item.last_recommend[0].uname}}</span>
              </a>
              <span class="tag">推荐</span>
            </div>
          </div>
        </template>
      </div>
    </div>
    <div class="r-con adpos">
      <a target="_blank" href="https://www.bilibili.com/blackboard/activity-dmjbfj.html">
        <div class="lazy-img">
          <img src="//i0.hdslb.com/bfs/archive/0aa2f32c56cb65b6d453192a3015b65e62537b9a.jpg@325w_188h.webp">
        </div>
      </a>
    </div>
  </div>
</template>
<script>
import HeadLine from '../left-content/HeadLine'
import StoreyBox from '../left-content/card/StoreyBox'
import { mapGetters } from 'vuex'
export default {
  name: 'SpecialRecommend',
  components: {
    HeadLine,
    StoreyBox
  },
  computed: {
    ...mapGetters([
      'specialRecommend'
    ])
  },
  mounted () {
    this.$store.dispatch('getSpecialRecommend')
  }
}
</script>
<style lang="stylus" scoped>
.headline >>> .icon_t.icon-special
    background-position -141px -780px
.special-recommend-module
  padding-bottom 30px
  .storey-box
    height 160px
    overflow hidden
  .special
    float left
    margin 0 20px 20px 0

.special-module
  position relative
  width 160px
  height 160px
  font-size 12px
  overflow hidden
  .pic
    color #222
    &:hover
      color #00a1d6
    .pic-box
      position relative
      width 160px
      height 100px
      border-radius 4px
      overflow hidden
      &:hover
        .w-later
          display block
    .title
      margin-top 24px
      word-break break-all
      word-wrap break-word
      height 40px
      line-height 20px
  .user
    position absolute
    left 5px
    top 74px
    a
      color #222
      &:hover
        color #00a1d6
    .face
      width 45px
      height 45px
      border 1px solid #fff
      border-radius 50%
      vertical-align middle
      overflow hidden
    .name
      width 68px
      position absolute
      left 52px
      top 28px
      white-space nowrap
      text-overflow ellipsis
      overflow hidden
    .tag
      width 30px
      position absolute
      left 124px
      top 28px
      color #aaa
.adpos
  position relative
  padding-top 45px
  a
    display block
  img
    border-radius 4px
</style>
