<!--
三种卡片类别（spread-module、card-live-module、special-module）
1. 预览视频（进度条、弹幕、金银标识）
2. 标题下额外信息toggle（播放量、弹幕量）
-->
<template>
  <div class="storey-box clearfix">
    <spread-card :list="list" v-if="type === 'spread'"></spread-card>
    <live-card :list="list" v-if="type === 'live'"></live-card>
  </div>
</template>
<script>
import SpreadCard from './SpreadCard'
import LiveCard from './LiveCard'
export default {
  name: 'StoreyBox',
  components: {
    SpreadCard,
    LiveCard
  },
  props: {
    list: Array,
    type: {
      type: String,
      required: true
    }
  }
}
</script>
<style lang="stylus" scoped>
.storey-box
  height 168px
  overflow hidden
</style>
