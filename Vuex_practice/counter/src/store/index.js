import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    },
    decrement(state) {
      state.count--
    }
  },
  actions: {
  },
  modules: {
  }
});

store.commit('increment');
console.log(store.state.count);

new Vue({
  el: '#app',
  data: {
    message: "Hello World"
  }
})