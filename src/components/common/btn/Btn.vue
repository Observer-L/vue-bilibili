<template>
  <div class="btn">
    <div
      v-if="isDropdown"
    >
      <!-- Todo -->
      dropdown btn
    </div>
    <a
      v-else
      target="_blank"
      :href="link"
      :class="btnClass"
    >
      <i class="icon" v-if="floatPos === 'fl'"></i>
      <span>{{text}}</span>
      <i class="icon" v-if="floatPos === 'fr'"></i>
    </a>
</div>
</template>
<script>
export default {
  name: 'Btn',
  props: {
    type: {
      // more、link-more、dropdown、read-push
      type: String,
      required: true
    },
    position: {
      type: String,
      default: 'right'
    },
    link: String
  },
  data () {
    return {
      btnClass: this.type,
      isDropdown: this.type === 'dropdown',
      floatPos: this.position === 'right' ? 'fr' : 'fl'
    }
  },
  computed: {
    text () {
      if (this.type === 'more' || this.type === 'link-more') {
        return '更多'
      } else if (this.type === 'dropdown') {
        return ['三日', '一周']
      } else if (this.type === 'read-push') {
        return '666条新动态'
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
// dropdown、read-push样式待写...
.btn
  display inline
  float right
  .link-more, .more
      display block
      width 52px
      height 22px
      margin 0 0 0 10px
      font-size 12px
      line-height 22px
      text-align center
      color #555
      background-color #fff
      box-sizing border-box
      border-radius 4px
      border 1px solid #ccd0d7
      transition all .2s
    .icon
      display inline-block
      width 6px
      height 12px
      margin -2px 0 0
      vertical-align middle
      background-position -478px -218px
      transition all .2s
  .link-more
    &:hover
      background-color #ccd0d7
      .icon
        margin-left 5px
  .more
    &:hover
      background #f0f0f0
</style>
