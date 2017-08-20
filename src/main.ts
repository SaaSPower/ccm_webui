import Vue from 'vue'
import iView from 'iview'
import store from './store'
import App from './App.vue'
import router from './router'
import 'iview/dist/styles/iview.css'
import './styles/base.scss'

Vue.config.productionTip = false

Vue.use(iView)

// tslint:disable-next-line
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
