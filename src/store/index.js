import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { Indicator } from 'mint-ui';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nowplayingList: [],
    commingsoonList: [],
    cinemaList:[]
  },
  mutations: {
    getNowplayingMutation(state,data){
      state.nowplayingList = data
    },
    getCommingSoonMutation(state,data){
      state.commingsoonList = data
    },
    cinemaListMutation(state,data){
      state.cinemaList = data
    }
  },
  actions: {
    getNowplayingAction(store){
      axios({
        url:'https://m.maizuo.com/gateway?cityId=341100&pageNum=1&pageSize=10&type=1&k=8165506',
        headers:{
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16132234251904032016760833","bc":"341100"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        store.commit('getNowplayingMutation',res.data.data.films)
        Indicator.close();
      })
    },
    getCommingSoonMutation(store){
      axios({
        url:'https://m.maizuo.com/gateway?cityId=440100&pageNum=1&pageSize=10&type=2&k=270168',
        headers:{
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16132234251904032016760833","bc":"440100"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        store.commit('getCommingSoonMutation',res.data.data.films)
        Indicator.close();
      })
    }
  },
  modules: {
  }
})
