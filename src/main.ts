import Vue from 'vue'
import ElementUI from 'element-ui'
import store from './store'
import App from './App.vue'
import router from './router'
import 'element-ui/lib/theme-default/index.css'
import './styles/base.scss'

Vue.config.productionTip = false

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
