import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BillboardViewVue from '@/views/BillboardView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/new_movie',
    name: 'new_movie', 
    component: () => import(/* webpackChunkName: "about" */ '../views/NewMovies.vue')
  },
  {
    path: '/moovie/:id',
    name: 'moovie', 
    component: () => import(/* webpackChunkName: "about" */ '../views/MovieView.vue')
  },
  {
    path: '/billboard',
    name: 'billboard', 
    component: BillboardViewVue
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
