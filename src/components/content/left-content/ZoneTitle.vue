<template>
  <div class="zone-title">
    <head-line :cat="cat"></head-line>
  </div>
</template>
<script>
import HeadLine from './HeadLine'
export default {
  name: 'ZoneTitle',
  components: {
    HeadLine
  },
  props: {
    cat: String
  }
}
</script>
<style lang="stylus" scoped>
.zone-title
  padding-right 20px
.headline >>> .name:hover
    color #00a1d6
</style>
