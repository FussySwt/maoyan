import Vue from 'vue'
import VueRouter from 'vue-router'
import FilmRouter from './film'
import CinemaRouter from './cinema'
import CenterRouter from './center'
import CityRouter from './city'
import SearchListRouter from './searchlist'
import DetailsRouter from './details'
import DetailPhotosRouter from './photos'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    FilmRouter,
    CinemaRouter,
    CenterRouter,
    CityRouter,
    SearchListRouter,
    DetailsRouter,
    DetailPhotosRouter,
    {
      path: '/',
      redirect: '/film/nowplaying'
    }
  ]
})

export default router
