<template>
  <div class="popularize-module clearfix">
    <left-content cat="live" type="live" :list="recommend"></left-content>
  </div>
</template>
<script>
import LeftContent from '../left-content/Lcon'
import { mapGetters } from 'vuex'
export default {
  name: 'Live',
  components: {
    LeftContent
  },
  computed: {
    ...mapGetters([
      'requesting',
      'error',
      'recommend'
    ])
  },
  mounted () {
    this.$store.dispatch('live')
  }
}
</script>
<style lang="stylus" scoped>
.popularize-module
  padding-bottom 15px
</style>
