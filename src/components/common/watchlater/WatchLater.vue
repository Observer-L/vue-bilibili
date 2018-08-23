<template>
  <div
    class="watch-later-trigger w-later"
    :class="{'added': isAdded}"
    @mouseenter="showHint(el, notify)"
    @mouseleave="removeHint"
    @click.stop.prevent="handleClick"
  >
  </div>
</template>
<script>
export default {
  name: 'WatchLater',
  props: {
    target: [Number, String]
  },
  data () {
    return {
      notify: '稍后再看',
      isAdded: false,
      el: null,
      timer: null
    }
  },
  mounted () {
    this.el = this.$el
  },
  watch: {
    isAdded (val, oldVal) {
      this.isAdded === true ? this.notify = '移除' : this.notify = '稍后再看'
      document.body.removeChild(document.getElementsByClassName('watch-later-hint')[0])
    }
  },
  methods: {
    addToList () {
      this.isAdded = true
      this.showHint(this.$el, '已加稍后再看')
    },
    removeToList () {
      this.showHint(this.el, '已从稍后再看列表中移除')
      this.isAdded = false
    },
    showHint (e, msg) {
      const hint = document.createElement('div')
      hint.className = 'watch-later-hint'
      hint.innerText = msg
      document.body.appendChild(hint)
      hint.style.top = `${this.getElementTop(e) - 30}px`
      hint.style.left = `${this.getElementLeft(e) - Math.ceil(hint.offsetWidth / 2.3)}px`
      if (msg === '稍后再看') return
      clearTimeout(this.timer)
      // this.fadeIn(hint, 300)
      this.timer = setTimeout(() => {
        this.fadeOut(hint, 300)
      }, 2000)
    },
    handleClick () {
      this.isAdded === true ? this.removeToList() : this.addToList()
    },
    removeHint () {
      document.body.removeChild(document.getElementsByClassName('watch-later-hint')[0])
    },
    getElementLeft (ele) {
      let actualLeft = ele.offsetLeft
      let current = ele.offsetParent
      while (current !== null) {
        actualLeft += current.offsetLeft
        current = current.offsetParent
      }
      return actualLeft
    },
    getElementTop (ele) {
      let actualTop = ele.offsetTop
      let current = ele.offsetParent
      while (current !== null) {
        actualTop += current.offsetTop
        current = current.offsetParent
      }
      return actualTop
    },
    fadeIn (el, time) {
      if (el.style.opacity === '') {
        el.style.opacity = 0
      }
      if (el.style.display === '' || el.style.display === 'none') {
        el.style.display = 'block'
      }
      var t = setInterval(function () {
        if (el.style.opacity < 1) {
          el.style.opacity = parseFloat(el.style.opacity) + 0.01
        } else {
          clearInterval(t)
        }
      }, time / 100)
    },
    fadeOut (el, time) {
      if (el.style.opacity === '') {
        el.style.opacity = 1
      }
      if (el.style.display === '' || el.style.display === 'none') {
        el.style.display = 'block'
      }
      var t = setInterval(function () {
        if (el.style.opacity > 0) {
          el.style.opacity = parseFloat(el.style.opacity) - 0.01
        } else {
          clearInterval(t)
          el.style.display = 'none'
        }
      }, time / 100)
    }
  }
}
</script>
<style lang="stylus" scoped>
.watch-later-trigger
  position absolute
  display none
  width 22px
  height 22px
  right 6px
  bottom 4px
  cursor pointer
  background-image url('~assets/images/content/w-later.png')
  &.added
    background-image url('~assets/images/content/w-added.png')
.ri-info-wrap
  .w-later
    right 160px
</style>
