<template>
  <div class="l-con">
    <head-line :cat="cat" v-if="cat === 'promote'"></head-line>
    <zone-title :cat="cat" v-else></zone-title>
    <storey-box :list="list" :type="type"></storey-box>
  </div>
</template>
<script>
import ZoneTitle from './ZoneTitle'
import HeadLine from './HeadLine'
import StoreyBox from './card/StoreyBox'
export default {
  name: 'leftContent',
  components: {
    ZoneTitle,
    HeadLine,
    StoreyBox
  },
  props: {
    list: Array,
    cat: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  }
}
</script>
<style lang="stylus" scoped>

</style>
