<template>
<div class="zone-wrap-module clearfix">
  <div class="zone-module">
    <div class="new-comers-module l-con">
      <zone-title :cat="row.category" :name="row.name"></zone-title>
      <storey-box type="spread" :list="row.item"></storey-box>
    </div>
  </div>
</div>
</template>
<script>
import ZoneTitle from './ZoneTitle'
import StoreyBox from '../left-content/card/StoreyBox'
export default {
  name: 'Floor',
  components: {
    ZoneTitle,
    StoreyBox
  },
  props: {
    row: Object
  }
}
</script>
<style lang="stylus" scoped>

</style>
