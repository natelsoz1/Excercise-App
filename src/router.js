import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import excercise from './views/Excercise.vue'
import Bitch from './views/Bitch.vue'
import Stats from './views/Stats.vue'
import Goals from './views/Goals.vue'
import SetGoals from './views/SetGoals.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/excercise',
      name: 'excercise',
      component: excercise
    },
    {
      path: '/stats',
      name: 'stats',
      component: Stats
    },
    {
      path: '/goals',
      name: 'goals',
      component: Goals
    },
    {
      path: '/setgoals',
      name: 'setgoals',
      component: SetGoals
    },
    {
      path: '/bitch',
      name: 'bitch',
      component: Bitch
    }

  ]
})
