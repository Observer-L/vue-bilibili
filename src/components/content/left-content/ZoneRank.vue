<template>
  <section class="zone-rank sec-rank">
    <header class="rank-head">
      <h3>排行</h3>
      <Tabs :tabs="['全部', '原创']" class="rank-tab" @switch-tabs="switchTabs" :hover="true"></Tabs>
      <Btn link="#" :type="'dropdown'" class="rank-dropdown" @switch="switchTl"></Btn>
    </header>
    <div :class="['rank-list-wrap', {'show-origin': showOrigin}]">
      <ul class="rank-list hot-list" v-if="rank.hot">
        <li
          v-for="(item, index) of rank.hot.list"
          v-if="index < 7"
          :key="index"
          :class="['rank-item', {'show-detail first': index === 0, 'highlight': index < 3}]">
          <i class="ri-num">{{index + 1}}</i>
          <a :href="'//bilibili/video/av' + item.aid" :title="item.title" class="ri-info-wrap clearfix">
            <div class="lazy-img ri-preview" v-if="index === 0">
              <img :src="item.pic" :alt="item.title">
            </div>
            <div class="ri-detail">
              <p class="ri-title">{{item.title}}</p>
              <p class="ri-point">综合评分：{{item.pts}}</p>
            </div>
          </a>
        </li>
      </ul>
      <ul class="rank-list origin-list"  v-if="rank.hot_original">
        <li
          v-for="(item, index) of rank.hot_original.list"
          v-if="index < 7"
          :key="index"
          :class="['rank-item', {'show-detail first': index === 0, 'highlight': index < 3}]">
          <i class="ri-num">{{index + 1}}</i>
          <a :href="'//bilibili/video/av' + item.aid" :title="item.title" class="ri-info-wrap clearfix">
            <div class="lazy-img ri-preview" v-if="index === 0">
              <img :src="item.pic" :alt="item.title">
            </div>
            <div class="ri-detail">
              <p class="ri-title">{{item.title}}</p>
              <p class="ri-point">综合评分：{{item.pts}}</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <Btn :type="'more-link'" link="#"></Btn>
  </section>
</template>
<script>
import { contentrankApi } from 'api'
export default {
  name: 'ZoneRank',
  props: {
    categoryId: Number
  },
  data () {
    return {
      showOrigin: false,
      isWeek: false,
      threeDayData: {},
      weekData: {},
      rank: {}
    }
  },
  methods: {
    switchTl (timeline) {
      timeline === '一周' ? this.isWeek = true : this.isWeek = false
    },
    switchTabs (index) {
      index === 1 ? this.showOrigin = true : this.showOrigin = false
    },
    getRankData () {
      if (this.isWeek && JSON.stringify(this.weekData) !== '{}') {
        this.rank = this.weekData
        return
      }
      if (!this.isWeek && JSON.stringify(this.threeDayData) !== '{}') {
        this.rank = this.threeDayData
        return
      }

      let param = {categoryId: this.categoryId}
      if (this.isWeek) {
        contentrankApi.contentrankweek(param).then((response) => {
          this.weekData = response
          this.rank = this.weekData
        })
      } else {
        contentrankApi.contentrank(param).then((response) => {
          this.threeDayData = response
          this.rank = this.threeDayData
        })
      }
    }
  },
  watch: {
    isWeek (val, oldVal) {
      this.getRankData()
    }
  },
  mounted () {
    this.getRankData()
  }
}
</script>
<style lang="stylus" scoped>
.zone-rank
  float right
  width 260px
  min-height 360px
.sec-rank
  overflow hidden
  .rank-head
    height 24px
    line-height 24px
    h3
      float left
      font-size 18px
      font-weight 400
    .rank-tab
      margin-left 20px
      float left
    .rank-dropdown
      float right
  .rank-list-wrap
    width 200%
    overflow hidden
    zoom 1
    transition all .2s linear
    &.show-origin
      margin-left -100%
    .rank-list
      padding-bottom 15px
      min-height 278px
      padding-top 20px
      position relative
      width 50%
      float left
      .rank-item
        position relative
        padding-left 25px
        margin-top 20px
        overflow hidden
        &.first
          margin-top 0
          margin-bottom 15px
        &.highlight
          .ri-num
            background #f25d8e
        .ri-num
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
          border-radius 4px
          padding 0 3px
          font-weight bolder
          font-style normal
        .ri-info-wrap
          position relative
          display block
          cursor pointer
        .ri-preview
          margin-right 5px
          width 80px
          height 50px
          float left
          display none
          border-radius 4px
          overflow hidden
        .ri-detail
          float left
          .ri-title
            height 18px
            line-height 18px
            overflow hidden
            color #222
          .ri-point
            line-height 12px
            color #99a2aa
            height 12px
            margin-top 5px
            display none
            overflow hidden
        &:hover
          .ri-title
            color #00a1d6
        &.show-detail
          .ri-title
            height 36px
            line-height 18px
            margin-top -3px
            width 150px
            padding 0
          .ri-preview, .ri-point
            display block
</style>
