<template>
<div class="zone-wrap-module clearfix">
  <div class="zone-module">
    <div class="new-comers-module l-con">
      <zone-title :cat="category" :name="row.name"></zone-title>
      <storey-box type="spread" :list="row.item"></storey-box>
    </div>
    <zone-rank :categoryId="categoryId"></zone-rank>
  </div>
</div>
</template>
<script>
import ZoneTitle from './ZoneTitle'
import StoreyBox from '../left-content/card/StoreyBox'
import ZoneRank from '../left-content/ZoneRank'

import { mapGetters } from 'vuex'
export default {
  name: 'Floor',
  components: {
    ZoneTitle,
    StoreyBox,
    ZoneRank
  },
  props: {
    row: Object,
    category: String,
    categoryId: Number
  },
  computed: {
    ...mapGetters([
      'requesting',
      'error',
      'ranks',
      'rank'
    ])
  },
  mounted () {
    this.$store.dispatch('getContentRank', this.categoryId)
  }
}
</script>
<style lang="stylus" scoped>

</style>
