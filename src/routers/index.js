import Vue from 'vue'
import Router from 'vue-router'
import movierouter from './movie'
import cinemaouter from './cinema'
import minerouter from './mine'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      name:'movie',
     redirect:'/movie'
    },
    movierouter,
    cinemaouter,
    minerouter
  ]
})
