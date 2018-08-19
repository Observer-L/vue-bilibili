<template>
  <div id="app">
    <bili-header></bili-header>
    <bili-content></bili-content>
  </div>
</template>

<script>
import BiliHeader from './components/header/BiliHeader'
import BiliContent from './components/content/BiliContent'
export default {
  name: 'App',
  components: {
    BiliHeader,
    BiliContent
  }
}
</script>

<style lang="stylus" scoped>
#app
  font 12px Helvetica Neue,Helvetica,Arial,Microsoft Yahei,Hiragino Sans GB,Heiti SC,WenQuanYi Micro Hei,sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  height 1500px
</style>
