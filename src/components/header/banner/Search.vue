<template>
  <div class="search" v-clickoutside="hideSuggest">
    <form class="searchform">
      <input
        type="text"
        autocomplete="off"
        placeholder="输入“中国”试试"
        class="search-keyword"
        v-model="keyword"
        @focus="showHistory"
    >
    <button type="submit" class="search-submit"></button>
    </form>
    <ul class="bilibili-suggest" v-show="isKeywordShow">
      <li class="kw">
        <div class="b-line">
          <p>
          <span>关键词</span>
          </p>
        </div>
      </li>
      <template v-for="result of keywordList.results">
        <li
          class="suggest-item"
          v-for="(item, index) of result"
          :key="index"
        >
          <a
            :href="item.url"
            target="_blank"
            v-html="$options.filters.highlight(item.keyword, $data.keyword)">
            <!-- {{ item.keyword | highlight(keywordList.keyword) }} -->
          </a>
        </li>
      </template>
    </ul>
    <ul class="bilibili-suggest" v-show="isHistoryShow && !keyword && !isHistoryEmpty">
      <li class="kw">
        <div class="b-line">
          <p>
          <span>历史搜索</span>
          </p>
        </div>
      </li>
      <template v-for="result of historyList">
        <li
          class="suggest-item"
          v-for="(item, index) of result"
          :key="index"
        >
          <a :href="item.url" target="_blank">
            {{item.keyword}}
          </a>
          <div class="cancel" @click="deleteHistory(index)"></div>
        </li>
      </template>
    </ul>
    <a href="//www.bilibili.com/ranking" target="_blank" class="link-ranking">
      <span>排行榜</span>
    </a>
  </div>
</template>
<script>
export default {
  name: 'Search',
  data () {
    return {
      keyword: '',
      keywordList: {
        keyword: '中国',
        results: [
          {
            result1: {
              keyword: '中国',
              url: 'https://www.baidu.com'
            }
          },
          {
            result2: {
              keyword: '中国BOY超级大猩猩',
              url: 'https://www.baidu.com'
            }
          },
          {
            result3: {
              keyword: '中国新说唱',
              url: 'https://www.baidu.com'
            }
          },
          {
            result4: {
              keyword: '中国BOY',
              url: 'https://www.baidu.com'
            }
          },
          {
            result5: {
              keyword: '中国吃播',
              url: 'https://www.baidu.com'
            }
          },
          {
            result6: {
              keyword: '中国好声音',
              url: 'https://www.baidu.com'
            }
          },
          {
            result7: {
              keyword: '舌尖上的中国',
              url: 'https://www.baidu.com'
            }
          },
          {
            result8: {
              keyword: '中国测试中国测试中测试国中国测试中国测试中测试国中国测试中国测试中测试国中国测试中国测试中测试国',
              url: 'https://www.baidu.com'
            }
          }
        ]},
      historyList: [
        {
          a: {
            keyword: '如何拯救世界',
            url: 'https://www.baidu.com'
          }
        },
        {
          b: {
            keyword: '如何毁灭世界',
            url: 'https://www.baidu.com'
          }
        }
      ],
      isKeywordShow: false,
      isHistoryShow: false,
      isHistoryEmpty: false
    }
  },
  methods: {
    haveKeyword (keyword) {
      const target = keyword.replace(/\s+/g, '')
      if (!target) return
      const list = this.keywordList
      if (list.keyword.includes(target) && list.results.length !== 0) {
        this.isKeywordShow = true
        console.log('got it')
      } else {
        this.isKeywordShow = false
        console.log('not found')
      }
    },
    hideSuggest () {
      this.isHistoryShow = false
      this.isKeywordShow = false
    },
    showHistory () {
      this.isHistoryShow = true
    },
    deleteHistory (index) {
      this.historyList.splice(index, 1)
      this.isHistoryEmpty = this.historyList.length === 0
    }
  },
  filters: {
    highlight (result, keyword) {
      // const offset = keyword.length
      // let index = result.indexOf(keyword)
      // const indexPos = []
      // while (index > -1) {
      //   indexPos.push(index)
      //   index = result.indexOf(keyword)
      // }

      // html = `
      //   ${html.substring(0, index)}
      //     <em class="suggest_high_light">
      //       ${html.substring(index, index + offset)}
      //     </em>
      //   ${html.substring(index + offset)}
      // `
      const target = keyword.replace(/\s+/g, '')
      const reg = new RegExp(target, 'g')
      return result.replace(reg, `<em class="suggest_high_light">${target}</em>`)
    }
  },
  watch: {
    keyword () {
      this.isHistoryShow = false
      this.keyword === '' ? this.isKeywordShow = false : this.haveKeyword(this.keyword)
    }
  }
  // mounted () {
  //   const that = this
  //   document.addEventListener('click', e => {
  //     console.log(e.target.className)
  //     if (e.target.className !== 'bilibili-suggest' &&
  //           e.target.className !== 'search-keyword' &&
  //             e.target.className !== 'kw') {
  //       that.hideSuggest()
  //     } else {
  //     }
  //   })
  // }
}
</script>
<style lang="stylus" scoped>
@import '~styles/mixin.styl'
.search
  position absolute
  bottom 20px
  right 0
  width 268px
  height 32px
  padding 2px 2px 2px 72px
  background-color rgba(0,0,0,.12)
  border-radius 6px
  font-size 12px
  z-index 10
  .searchform
    display block
    height 32px
    border-radius 4px
    background-color hsla(0,0%,100%,.88)
    transition background-color .2s
    &:hover
      background-color #fff
    .search-keyword
      float left
      width 200px
      height 32px
      color #222
      font-size 12px
      line-height 32px
      padding 0 12px
      overflow hidden
      box-shadow none
      border 0
      outline none
      background-color transparent
    .search-submit
      display block
      position absolute
      right 0
      width 48px
      height 32px
      min-width 0
      margin 0
      padding 0
      border 0
      cursor pointer
      background url('~assets/images/base/icons.png') -653px -720px
      &:hover
        background-position -718px -720px
  .link-ranking
    position absolute
    left 2px
    top 2px
    width 68px
    height 32px
    line-height 32px
    background-color hsla(0,0%,100%,.88)
    border-radius 4px
    transition background-color .2s
    &:hover
      background-color #fff
    span
      padding-left 26px
      color #f25d8e
      display inline-block
      background url('~assets/images/base/icons.png') -659px -655px no-repeat
.bilibili-suggest
  position relative
  border 1px solid #e5e9ef
  margin-top 2px
  background #fff
  z-index 99999
  border-radius 4px
  box-shadow 0 2px 4px rgba(0,0,0,.16)
  padding-bottom 5px
  font-size 12px
  .b-line
    border-top 1px solid #e5e9ef
    position relative
    height 10px
    margin 10px 10px 0
    p
      margin-top -10px
      text-align center
    span
      display inline-block
      padding 0 10px
      height 18px
      text-align center
      cursor pointer
      color #99a2aa
      background #fff
  .cancel
    position absolute
    right 10px
    top 0
    width 38px
    height 28px
    background url('~assets/images/base/icons.png') -461px -530px no-repeat
  .suggest-item
    position relative
    display block
    padding 6px 10px
    cursor pointer
    word-wrap break-word
    word-break break-all
    a
      ellipsis()
      max-width 200px
      color #222
    >>> .suggest_high_light
      color #f25d8e
    &:hover
      background-color #e5e9ef
</style>
