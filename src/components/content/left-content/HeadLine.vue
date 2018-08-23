<template>
  <div class="headline clearfix">
    <i :class="['icon', 'icon_t', 'icon-' + cat]"></i>

    <span class="name" v-if="cat === 'promote'">推广</span>
    <span class="name" v-else>{{text}}</span>
    <btn v-if="link" type="link-more" :link="link"></btn>

    <template v-if="cat === 'live'">
      <a href="//live.bilibili.com/" target="_blank" class="name">正在直播</a>
      <p class="online">当前共有<span>{{online_total}}</span>个在线直播</p>
      <a :href="text_link.link" target="_blank" class="fire"><i class="icon pmt-icon"></i>
        {{text_link.text}}
      </a>
    </template>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'HeadLine',
  props: {
    cat: {
      type: String,
      required: true
    },
    text: {
      type: String
    },
    link: {
      type: String
    }
  },
  computed: {
    ...mapGetters([
      'requesting',
      'error',
      'online_total',
      'text_link'
    ])
  },
  mounted () {
    this.$store.dispatch('live')
  }
}
</script>
<style lang="stylus" scoped>
.headline
  padding 0 0 15px
  .online
    float left
    margin-top 8px
    color #99a2aa
    span
      color #00a1d6
  .fire
    margin-top 8px
    margin-left 40px
    padding-right 10px
    color #6d757a
    float left
    &:hover
      color #00a1d6
    .pmt-icon
      display inline-block
      vertical-align top
      background-position -665px -1113px
      width 14px
      height 14px
      margin-top 1px
  .name
    font-size 24px !important
    line-height 24px
    font-weight 400
    margin-right 20px
    float left
    color #222
  .icon_t
    width 40px
    height 40px
    margin-right 10px
    vertical-align middle
    float left
    margin-top -10px
    &.icon-promote
      background-position -141px -75px
    &.icon-live
      background-position -141px -652px
</style>
