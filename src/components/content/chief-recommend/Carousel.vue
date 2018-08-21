<template>
  <div class="carousel-box" @mouseover="removeInterval(interval)" @mouseout="startInterval">
    <div class="carousel-module">
      <div class="panel">
        <ul class="pic" style="width: 500%;" ref="pic">
          <li
            v-for="(item, index) of bannerlist"
            :key="index"
            :class="['scrollx', {'on': current === index, 'off': current !== index}]"
          >
            <a :href="item.url" target="_blank">
              <div class="lazy-img">
                <img :src="item.pic">
              </div>
            </a>
            <a href="https://www.bilibili.com/blackboard/topic_list.html" class="more-text">更多</a>
          </li>
        </ul>
        <ul class="title">
          <a
            v-for="(item, index) of bannerlist"
            target="_blank"
            :key="index"
            :href="bannerlist.url"
            :class="{'on': current === index}"
          >
            <img v-if="item.is_ad" src="~assets/images/content/banner/gg-pic.png" class="gg-pic">
            {{item.name}}
          </a>
        </ul>
        <ul class="trig">
          <span
            v-for="(item, index) of bannerlist"
            :key="index"
            :class="{'on': current === index}"
            @click="switchSlide(index)"
            >
          </span>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Carousel',
  data () {
    return {
      current: 0,
      interval: Function
    }
  },
  computed: {
    ...mapGetters([
      'requesting',
      'error',
      'bannerlist'
    ])
  },
  methods: {
    startInterval () {
      this.interval = setInterval(() => {
        this.current === 4 ? this.current = 0 : this.current++
        let distance = -100 * this.current
        if (this.$refs.pic) {
          this.$refs.pic.style.marginLeft = distance + '%'
        }
      }, 1000)
    },
    removeInterval () {
      clearInterval(this.interval)
    },
    switchSlide (index) {
      this.current = index
      let distance = -100 * this.current
      this.$refs.pic.style.marginLeft = distance + '%'
    }
  },
  mounted () {
    this.startInterval()
    this.$store.dispatch('bannerlist')
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/mixin.styl'
.carousel-box
  width 440px
  height 220px
  float left
  .carousel-module
    position relative
    width 100%
    height 100%
    .panel
      position relative
      width 100%
      height 100%
      border-radius 4px
      overflow hidden
      .scrollx
        float left
      .pic
        z-index 1
        position relative
        transition all .3s
        a
          display inline-block
        li
          position relative
          &:hover
              .more-text
                opacity 1
          .more-text
            position absolute
            right 15px
            bottom 35px
            color #fff
            background #444
            background rgba(0,0,0,.64)
            width 50px
            height 24px
            line-height 24px
            text-align center
            border-radius 4px
            opacity 0
            transition all .2s linear
            &:hover
              text-shadow 0 0 3px #fff
              color #fff
            &:after
              content ""
              display inline-block
              width 6px
              height 12px
              margin -2px 0 0 5px
              vertical-align middle
              background url('~assets/images/base/icons.png') -541px -218px
      .title
        position absolute
        bottom 0
        left 0
        width 100%
        height 35px
        line-height 35px
        background rgba(0,0,0,.5)
        font-size 14px
        z-index 2
        background -webkit-linear-gradient(transparent,rgba(0,0,0,.5))
        a
          position absolute
          width 100%
          padding-left 10px
          color #fff
          opacity 0
          z-index -1
          transition all .3s
          width 280px
          ellipsis()
          &.on
            opacity 1
            z-index 1
      .trig
        position absolute
        z-index 3
        bottom 6px
        right 20px
        span
          display inline-block
          margin-left 8px
          border-radius 10px
          background #fff
          cursor pointer
          width 18px
          height 18px
          background-image url('~assets/images/base/icons.png')
          background-position -855px -790px
          background-color transparent
          transition none
          &.on
            background-position -855px -727px
            width 18px
            height 18px
          &:hover
            background-position -919px -790px
</style>
