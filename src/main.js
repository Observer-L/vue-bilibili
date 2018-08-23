import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import axios from 'axios'

import 'styles/global.styl'

// 全局指令
import './directives'

// 全局组件注册
import Btn from 'common/btn'
import Notification from 'common/notification'
import Tabs from 'common/tabs'

// 全局过滤器
import * as custom from 'common/filters/custom'

Object.keys(custom).forEach(key => {
  Vue.filter(key, custom[key])
})

Vue.use(Btn)
Vue.use(Notification)
Vue.use(Tabs)

Vue.config.productionTip = false
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
