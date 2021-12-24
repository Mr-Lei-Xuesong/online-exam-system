import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('@/components/common/login')
    },
    {
      path: '/teacher',
      name: 'teacher',
      component: () => import('@/components/teacher/index'),
      children: []
    },
    {
      path: '/student',
      name: 'student',
      component: () => import('@/components/student/index'),
      children: []
    }

  ]
})
