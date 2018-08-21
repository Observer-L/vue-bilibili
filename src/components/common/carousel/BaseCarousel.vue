<template>
  <div class="slider-box">
    <div class="carousel-module slider">
      <div class="panel" @mouseover="removeInterval(interval)" @mouseout="startInterval">
        <ul class="pic" ref="pic" :style="{'width': width}">
          <li
            v-for="(item, index) of list"
            :key="index"
            :class="['scrollx', {'on': current === index, 'off': current !== index}]"
            >
            <a :href="item.url" target="_blank">
              <div class="lazy-img">
                <img :src="item.pic">
              </div>
            </a>
          </li>
        </ul>
        <ul class="title">
          <a
            target="_blank"
            v-for="(item, index) of list"
            :key="index"
            :href="item.url"
            :class="{'on': current === index}"
          >
            {{item.title}}
          </a>
        </ul>
        <ul class="trig">
          <span
            v-for="(item, index) of list"
            :key="index"
            :class="{'on': current === index}"
            @mouseover="switchSlide(index)"
          ></span>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BaseCarousel',
  props: {
    list: Array
  },
  data () {
    return {
      current: 0,
      interval: Function
    }
  },
  computed: {
    width () {
      console.log(this.list.length)
      return this.list.length * 100 + '%'
    }
  },
  methods: {
    startInterval () {
      this.interval = setInterval(() => {
        this.current === 1 ? this.current = 0 : this.current++
        let distance = -100 * this.current
        if (this.$refs.pic) {
          this.$refs.pic.style.marginLeft = distance + '%'
        }
      }, 5000)
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
  }
}
</script>
<style lang="stylus" scoped>
.carousel-module, .carousel-module .panel
  position relative
  width 100%
  height 100%
.carousel-module
  .panel
    border-radius 4px
    overflow hidden
    .pic
      z-index 1
      position relative
      transition all .3s
      li
        position relative
        a
          display inline-block
    .scrollx
      float left
    .title
      z-index 2
      position absolute
      bottom 0
      left 0
      width 100%
      height 35px
      line-height 35px
      background rgba(0,0,0,.5)
      font-size 14px
      a
        position absolute
        width 100%
        color #fff
        padding-left 10px
        opacity 0
        z-index -1
        transition all .3s
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
        width 10px
        height 10px
        margin-left 8px
        border-radius 10px
        background #fff
        cursor pointer
        transition all .3s
        &.on
          width 30px
          background #f45d8f
</style>
