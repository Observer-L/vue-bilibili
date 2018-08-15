<template>
  <div id="app">
    <bili-header></bili-header>
  </div>
</template>

<script>
import BiliHeader from './components/common/BiliHeader'
export default {
  name: 'App',
  components: {
    BiliHeader
  }
}
</script>

<style lang="stylus" scoped>
#app
  font 12px Helvetica Neue,Helvetica,Arial,Microsoft Yahei,Hiragino Sans GB,Heiti SC,WenQuanYi Micro Hei,sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
</style>
