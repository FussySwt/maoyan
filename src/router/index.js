import Vue from 'vue'
import VueRouter from 'vue-router'
import FilmRouter from './film'
import CinemaRouter from './cinema'
import CenterRouter from './center'
import CityRouter from './city'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    FilmRouter,
    CinemaRouter,
    CenterRouter,
    CityRouter,
    {
      path: '/',
      redirect: '/film/nowplaying'
    }
  ]
})

export default router
