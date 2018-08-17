<template>
<div>
  <ul class="list">
    <div v-if="!isEmpty">
      <li class="no-data">列表中空空如也，赶紧去添加几个吧~</li>
    </div>
    <div v-else v-for="(record, index) of records" :key="index">
      <li v-if="record.timeline" class="timeline" >
        <span class="date">{{record.timeline}}</span>
      </li>
      <li v-for="(item, index) of record.list" :key="index">
        <a
          v-if="recordsType != 'history'"
          target="_blank"
          :href="item.link"
          :title="item.title"
        >
          {{item.title}}
        </a>

        <a
          v-else
          class="clearfix"
          target="_blank"
          :href="item.link"
          :title="item.title"
        >
          <div class="link">{{item.title}}</div>
          <div>
            <div class="state">
              <span class="page" v-if="item.page">第{{item.page}}P</span>
              <span class="split" v-if="item.page">|</span>
              <span class="progress">{{item.progress}}%</span>
              <i class="device pc"></i>
            </div>
          </div>
        </a>
      </li>
    </div>
  </ul>
  <div v-if="isEmpty">
    <a href="//space.bilibili.com/2867458/#/favlist" target="_blank" class="read-more">
      查看更多
      <i class="b-icon b-icon-arrow-r"></i>
    </a>
  </div>
</div>
</template>
<script>
export default {
  name: 'List',
  props: {
    list: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      records: this.list.records,
      recordsType: this.list.type,
      isEmpty: this.list.records.length
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "~styles/mixin.styl"
.list
  padding-top 10px
  li
    position relative
    overflow hidden
    clear both
    height 28px
    line-height 28px
    padding 0 12px 0 22px
    padding-left 38px
    font-size 12px
    text-align left
    ellipsis()
    .link
      ellipsis()
      max-width 240px
      float left
    .state
      font-size 12px
      color #99a2aa
      float right
      span
        display inline-block
        float left
      .device
        display inline-block
        width 20px
        height 20px
        margin-left 9px
        margin-top 3px
        background url(~@/assets/images/base/icons.png) no-repeat
        &.pc
          background-position -1367px -406px
      .split
        margin 0 5px
    &.no-data
      border none
      padding 0
      text-align center
      color #aaa
    &.timeline
      color #99a2aa
      overflow visible
      height 0
      padding 0
      margin 10px 0
      border-top 1px solid #e5e9ef
      position relative
      &:before
        content: none
      .date
        background-color #fff
        position absolute
        top -6px
        left 0
        z-index 10
        padding 0 10px
        height 12px
        line-height 12px
    &:hover
      background-color #e5e9ef
    &:before
      content: ''
      display block
      position absolute
      top 13px
      left 26px
      width 4px
      height 4px
      border-radius 2px
      background-color #6d757a
    a
      ellipsis()
      &:hover
        color #00a1d6
.bili-header
  .b-icon
    display inline-block
    vertical-align middle
    width 12px
    height 12px
    background url(~@/assets/images/base/icons.png) no-repeat
    &.b-icon-arrow-r
      width 6px
      height 12px
      margin -2px 0 0 5px
      background-position -478px -218px
  .mini-wnd-nav
    .read-more
      display block
      margin 4px 12px 12px
      height 22px
      line-height 22px
      color #222
      text-align center
      background #e5e9ef
      border 1px solid #e0e6ed
      border-radius 4px
      &:hover
        background-color #ccd0d7
    a
      transition color .2s
</style>
