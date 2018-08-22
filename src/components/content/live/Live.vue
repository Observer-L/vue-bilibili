<template>
<div id="bili_live" class="zone-wrap-module clearfix">
  <div class="live-module clearfix">
    <left-content cat="live" type="live" :list="recommend"></left-content>
    <right-content :ranking="ranking" :preview="preview"></right-content>
  </div>
</div>
</template>
<script>
import LeftContent from '../left-content/Lcon'
import RightContent from './Rcon'
import { mapGetters } from 'vuex'
export default {
  name: 'Live',
  components: {
    LeftContent,
    RightContent
  },
  computed: {
    ...mapGetters([
      'requesting',
      'error',
      'recommend',
      'ranking',
      'preview'
    ])
  },
  mounted () {
    this.$store.dispatch('live')
  }
}
</script>
