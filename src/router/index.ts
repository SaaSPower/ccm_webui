import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home.vue'
import CaseHistory from '@/pages/CaseHistory.vue'
import Disease from '@/pages/Disease.vue'
import Patient from '@/pages/Patient.vue'
import RatingScale from '@/pages/RatingScale.vue'
import NewRatingScale from '@/pages/NewRatingScale.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/case_history',
      name: 'CaseHistory',
      component: { template: `<router-view></router-view>` },
      meta: { label: '病历管理' },
      children: [
        {
          path: '',
          component: CaseHistory,
          meta: { label: '系统' }
        },
        {
          path: 'diseases/:diseaseUid',
          name: 'Disease',
          component: Disease,
          meta: { label: '病种' }
        },
        {
          path: 'patients/new',
          name: 'Patient',
          meta: { label: '新增病人' },
          component: Patient
        }
      ]
    },
    {
      path: '/rating_scale',
      name: 'RatingScalesList',
      component: { template: `<router-view></router-view>` },
      meta: { label: '量表管理' },
      children: [
        {
          path: '',
          component: RatingScale,
          meta: { label: '所有量表' }
        },
        {
          path: 'new',
          component: NewRatingScale,
          meta: { label: '创建量表' }
        }
      ]
    }
  ]
})
