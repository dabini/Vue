import Vue from 'vue'
import Vuex from 'vuex'

import cookies from 'vue-cookies'
import router from "@/router"
import axios from 'axios'
import SERVER from '@/api/drf'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authToken: cookies.get('auth-token'),
    articles: []
  },
  getters: {
    isLoggedIn(state) {
      return !!state.authToken
    },
    config: state => ({
      headers : {
        Authorization: `Token ${state.authToken}`
      }
    })
  },
  mutations: { //state 변경
    SET_TOKEN(state, token) {
      state.authToken = token
      cookies.set('auth-token', token)
    },
    SET_ARTICLES(state, articles) {
      state.articles = articles
    }
  },
  actions: {
    postAuthData({commit}, info) {
      axios.post(SERVER.URL, + info.location, info.data)
        .then(res => {
          commit('SET_TOKEN', res.data.key )
          router.push({ name: 'Home '})
        })
        .catch(err => console.log(err.response.data)) 
    },
    signup({ dispatch}, signupData) {      //actions에서 다른 action 부를 때 dispatch 사용
      const info = {
        data: signupData,
        location: SERVER.ROUTES.signup
      }
      dispatch('postAuthData', info)
    },
    login({ dispatch }, loginData) {
      const info = {
        data: loginData,
        location: SERVER.ROUTES.login
      }
      dispatch('postAuthData', info)
    },
    logout(getters) {
      axios.post(SERVER.URL + SERVER.ROUTES.logout, null, getters.config)
        .then(() => { //Django DB에서는 삭제 | cookie, state에는 남아있음
          commit('SET_TOKEN', null) // state에서도 삭제 => null값 들어있기 때문에 다른 것보다 먼저써야함
          cookies.remove('auth-token') // cookie에서도 삭제
          router.push({ name: 'Home'})
        })
        .catch(err => console.log(err.response.data))
    },
    fetchArticles() {
      axios.get(SERVER_URL + SERVER.ROUTES.articleList)
        .then(res => this.commit('SET_ARTICLES', res.data))
        .catch(err => console.error(err))
    },
    createArticle({getters}, articleData) {
      axios.post(SERVER_URL + SERVER.ROUTES.createArticle, articleData, getters.config )
          .then(() => 
            router.push({ name: "List"}))
          .catch(err => console.log(err.response.data))
  }
  },
  modules: {
  }
})
