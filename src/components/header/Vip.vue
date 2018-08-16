<template>
  <div>
    <div class="bubble-traditional">
      <div class="recommand">
        <div class="title">
          精彩推荐
          <Btn :type="'more'"></Btn>
        </div>
        <div class="bubble-col bubble-col-1 bubble-col-2">
          <div class="item">
            <a class="pic" target="_blank" href="https://www.bilibili.com/blackboard/activity-big-2018summer.html">
              <div class="lazy-img">
                <img alt="缤纷福利，分享一夏" src="#" style="background: none">
              </div>
            </a>
            <a class="recommand-link" target="_blank" href="https://www.bilibili.com/blackboard/activity-big-2018summer.html">缤纷福利，分享一夏</a>
          </div>
          <div class="item">
            <a class="pic" target="_blank" href="https://www.bilibili.com/read/cv943631">
              <div class="lazy-img">
                <img alt="大会员游戏礼包更新" src="#" style="background: none">
              </div>
            </a>
            <a class="recommand-link" target="_blank" href="https://www.bilibili.com/read/cv943631">大会员游戏礼包更新</a>
          </div>
        </div>
        <Notification>
          <a target="_blank" href="https://account.bilibili.com/account/points">
          积分够换1个月大会员，去兑换。
          </a>
        </Notification>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Vip'
}
</script>
<style lang="stylus" scoped>
.bubble-traditional
  padding 14px
  .recommand
    .title
      color #212121
      font-size 14px
      line-height 20px
      margin 5px 0 12px
      font-weight 900
    .bubble-col
      line-height 0
      &.bubble-col-2
        .item
          display inline-block
          width 50%
          margin-bottom 7px
          &:nth-child(2)
            text-align right
            .recommand-link
              margin-left 8px
          .pic
            display inline-block
          .recommand-link
            display block
            height 36px
            line-height 18px
            margin-top 10px
            color #222
            text-left left
            font-size 12px
            overflow hidden
            text-overflow ellipsis
            -webkit-line-clamp 2
            display -webkit-box
            -webkit-box-orient vertical
        img
          display block
          width 107px
          height 143px
          border-radius 4px
          background #ccc
.vip-m
  position absolute
  margin-left -107px
  width 260px
  border-radius 0 0 4px 4px
  border 1px solid #e5e9ef
  background-color #fff
  box-shadow 0 2px 4px rgba(0,0,0,.16)
  font-size 0
  text-align left
  z-index 7000
</style>
