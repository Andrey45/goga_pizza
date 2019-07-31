import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
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
      path: '/Pizza',
      name: 'Pizza',
      component: () => import(/* webpackChunkName: "pizza" */ './views/Pizza.vue')
    },
    {
      path: '/basket',
      name: 'basket',
      component: () => import(/* webpackChunkName: "basket" */ './views/basket.vue')
    },
    {
      path:'/snacks',
      name:'snacks',
      component: () => import(/* webpackChunkName: "basket" */ './views/snacks.vue')
    }
  ]
})
