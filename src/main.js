import Vue from 'vue'
import App from './App'
import router from './router'

import 'styles/global.styl'

// 全局组件注册
import Btn from 'common/btn'

Vue.use(Btn)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
