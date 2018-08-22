<template>
  <div :class="{'btn': type !== 'more-link', 'bili-dropdown': type === 'dropdown'}">
    <div
      v-if="isDropdown"
    >
      <span class="selected">{{currentTimeline}}</span>
      <i class="icon icon-arrow-down"></i>
      <ul class="dropdown-list" @click="switchTimeline">
        <li class="dropdown-item" style="display: none;">{{currentTimeline}}</li>
        <li class="dropdown-item">{{currentTimeline === '三日' ? '一周' : '三日'}}</li>
      </ul>
    </div>
    <a
      v-else
      target="_blank"
      :href="link"
      :class="btnClass"
    >
      <i class="icon" v-if="floatPos === 'fl'"></i>
        {{text}}
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
      floatPos: this.position === 'right' ? 'fr' : 'fl',
      currentTimeline: '三日'
    }
  },
  methods: {
    switchTimeline () {
      let tl = this.currentTimeline
      tl === '三日' ? this.currentTimeline = '一周' : tl === '一周' ? this.currentTimeline = '三日' : void 0
      this.$emit('switch', this.currentTimeline)
    }
  },
  computed: {
    text () {
      if (this.type === 'more' || this.type === 'link-more') {
        return '更多'
      } else if (this.type === 'more-link') {
        return '查看更多'
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

.more-link
  display block
  height 24px
  line-height 24px
  background-color #e5e9ef
  text-align center
  border 1px solid #e0e6ed
  border-radius 4px
  color #222
  transition .2s
  &:hover
    background-color #ccd0d7
    border-color #ccd0d7

.bili-dropdown
  position relative
  display inline-block
  vertical-align middle
  background-color #fff
  cursor pointer
  padding 0 7px
  height 22px
  line-height 22px
  border 1px solid #ccd0d7
  border-radius 4px
  &:hover
    .dropdown-list
      display block
  .selected
    display inline-block
    vertical-align top
  .icon-arrow-down
    background-position -475px -157px
    display inline-block
    vertical-align middle
    width 12px
    height 6px
    margin-left 5px
    margin-top -1px
  .dropdown-list
    position absolute
    width 100%
    background #fff
    border 1px solid #ccd0d7
    border-top 0
    left -1px
    top 22px
    z-index 10
    display none
    border-radius 0 0 4px 4px
    .dropdown-item
      cursor pointer
      margin 0
      padding 3px 7px
      &:hover
        background-color #e5e9ef
</style>
