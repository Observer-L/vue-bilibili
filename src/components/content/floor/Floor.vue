<template>
<div class="zone-wrap-module clearfix">
  <div class="zone-module">
    <div class="new-comers-module l-con">
      <zone-title :cat="row.category" :name="row.name"></zone-title>
    </div>
  </div>
</div>
</template>
<script>
import ZoneTitle from './ZoneTitle'
export default {
  name: 'Floor',
  components: {
    ZoneTitle
  },
  props: {
    row: Object
  }
}
</script>
<style lang="stylus" scoped>

</style>
