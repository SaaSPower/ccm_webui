import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home.vue'
import System from '@/pages/System.vue'
import Disease from '@/pages/Disease.vue'
import Patient from '@/pages/Patient.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/systems',
      name: 'System',
      component: System
    },
    {
      path: '/diseases/:uid',
      name: 'Disease',
      component: Disease
    },
    {
      path: '/patients/:uid',
      name: 'Patient',
      component: Patient
    }
  ]
})
