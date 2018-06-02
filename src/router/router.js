import Vue from 'vue'
import Router from 'vue-router'
import Indexs from '../components/index.vue'
import Abouts from '../components/about.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      component: Indexs
    },
    {
      path: '/about',
      component: Abouts
    }
  ]
})