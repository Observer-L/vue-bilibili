<!--
三种卡片类别（spread-module、card-live-module、special-module）
1. 预览视频（进度条、弹幕、金银标识）
2. 标题下额外信息toggle（播放量、弹幕量）
-->
<template>
  <div class="storey-box clearfix">
    <spread-card
      v-if="type === 'spread' && list.length"
      v-for="(item, index) of list"
      :key="index"
      :item="item"
      :index="index"
    ></spread-card>
    <live-card :list="list" v-else></live-card>
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
.live-module, .new-comers-module
  .storey-box
    height 336px
    overflow hidden
</style>
