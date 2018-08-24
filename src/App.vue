<template>
  <div id="app">
    <bili-header></bili-header>
    <bili-content :rows="rows"></bili-content>
    <side-nav @toggleMask="toggleMask" :options="options" :rows="rows" :isSort="isSort"></side-nav>

    <transition name="fade">
      <div class="elevator-mask" v-if="isSort" @click="toggleMask(false)"></div>
    </transition>
  </div>
</template>

<script>
import BiliHeader from './components/header/BiliHeader'
import BiliContent from './components/content/BiliContent'
import SideNav from './components/side-nav/SideNav'

import { mapGetters } from 'vuex'
export default {
  name: 'App',
  components: {
    BiliHeader,
    BiliContent,
    SideNav
  },
  data () {
    return {
      isSort: false
    }
  },
  computed: {
    ...mapGetters([
      'requesting',
      'error',
      'rows'
    ]),
    options () {
      let options = {
        offset: 200, // 偏移的距离
        offsetTop: 232, // 距离顶部距离
        items: this.rows
      }
      return options
    }
  },
  methods: {
    toggleMask: function (isSort) {
      // 是否开启排序模式和遮罩层
      this.isSort = isSort
    }
  },
  mounted () {
    this.$store.dispatch('getContentRows')
  }
}
</script>

<style lang="stylus" scoped>
#app
  font 12px Helvetica Neue,Helvetica,Arial,Microsoft Yahei,Hiragino Sans GB,Heiti SC,WenQuanYi Micro Hei,sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  height 1500px

.elevator-mask
  position fixed
  width 100%
  height 100%
  background rgba(0,0,0,.5)
  z-index 10000
  top 0
  left 0
</style>
