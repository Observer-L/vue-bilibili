<template>
  <div class="recommend-module clearfix">
    <template v-for="(item, index) of ranklist">
      <home-card :key="index" :item="item"></home-card>
    </template>
    <span class="rec-btn prev" @click="now = now > 0 ? now -= 1 : now = 2">
      {{ this.pre = this.now === 0 ? '昨日' : this.now === 1 ? '三日' : '一周'}}
    </span>
    <span class="rec-btn next" @click="now = now < 2 ? now += 1 : now = 0">
      {{ this.next = this.now === 0 ? '一周' : this.now === 1 ? '昨日' : '三日'}}
    </span>
  </div>
</template>
<script>
import HomeCard from './HomeCard'
import { mapGetters } from 'vuex'
export default {
  name: 'Recommend',
  components: {
    HomeCard
  },
  data () {
    return {
      now: 0,
      pre: '',
      mext: ''
    }
  },
  computed: {
    ...mapGetters([
      'requesting',
      'error',
      'ranklist'
    ])
  },
  mounted () {
    this.$store.dispatch('ranklist')
  }
}
</script>
<style lang="stylus" scoped>
.recommend-module
  position relative
  height 220px
  overflow hidden
  &:hover
    .rec-btn
      opacity 1
  .rec-btn
    opacity 0
    position absolute
    background-color rgba(0,0,0,.6)
    background-image url('~assets/images/base/icons2.png')
    background-repeat no-repeat
    width 20px
    top 50%
    margin-top -8px
    cursor pointer
    font-size 12px
    color #fff
    text-align center
    transition all .3s
    &.prev
      left 20px
      border-radius 0 4px 4px 0
      padding 13px 5px 13px 10px
      background-position 6px -1211px
    &.next
      right 0
      border-radius 0 4px 4px 0
      padding 13px 10px 13px 5px
      background-position 25px -1262px
</style>
