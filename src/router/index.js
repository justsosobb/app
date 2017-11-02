import Vue from 'vue'
import Router from 'vue-router'
import News from '@/components/news/news'
import Detail from '@/components/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/news/:type',
      component: News
    },
    {
      path: '/detail/:type/:id',
      component: Detail
    },
    {
      path: '/*',
      redirect: '/news/a'
    }
  ]
})
