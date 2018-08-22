<template>
  <div class="popularize-module clearfix">
    <left-content :list="promotelist" cat="promote" type="spread"></left-content>
    <right-content :list="promoteAd" :online="online"></right-content>
  </div>
</template>
<script>
import LeftContent from '../left-content/Lcon'
import RightContent from './Rcon'
import { mapGetters } from 'vuex'
export default {
  name: 'HomePopularize',
  components: {
    LeftContent,
    RightContent
  },
  computed: {
    ...mapGetters([
      'requesting',
      'error',
      'promotelist',
      'promoteAd',
      'online'
    ])
  },
  mounted () {
    this.$store.dispatch('promote')
    this.$store.dispatch('online')
  }
}
</script>
