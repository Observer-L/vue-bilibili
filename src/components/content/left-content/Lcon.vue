<template>
  <div class="l-con">
    <head-line></head-line>
    <storey-box :list="list"></storey-box>
  </div>
</template>
<script>
import HeadLine from '../left-content/HeadLine'
import StoreyBox from './StoreyBox'
export default {
  name: 'leftContent',
  props: {
    list: Array
  },
  components: {
    HeadLine,
    StoreyBox
  }
}
</script>
<style lang="stylus" scoped>

</style>
