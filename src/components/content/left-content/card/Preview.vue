<template>
<!-- 存在个别视频无预览图 -->
  <div
    v-if="cid"
    class="cover"
    :style="{
      backgroundImage: `url(https://i3.hdslb.com/bfs/videoshot/${cid}.jpg)`,
      backgroundPosition: '0px 0px',
      backgroundZize: '1600px'
      }"
    >
  </div>
</template>
<script>
export default {
  name: 'Preview',
  props: {
    cid: Number
  }
}
</script>
<style lang="stylus" scoped>
.cover
  position absolute
  left 0
  top 7px
  height 98px
  width 100%
  margin-top 2px
</style>
