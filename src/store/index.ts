import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dny: [
      { datum: '1.1.2021', den: 'po', kdo: 'Janik', pozn1: 'pozn1', pozn2: 'pozn2', pozn3: 'pozn3' },
      { datum: '2.1.2021', den: 'ut', kdo: 'Janik', pozn1: 'pozn1', pozn2: 'pozn2', pozn3: 'pozn3' },
      { datum: '3.1.2021', den: 'st', kdo: 'Janik', pozn1: 'pozn1', pozn2: 'pozn2', pozn3: 'pozn3' },
      { datum: '4.1.2021', den: 'ct', kdo: 'Janik', pozn1: 'pozn1', pozn2: 'pozn2', pozn3: 'pozn3' },
      { datum: '5.1.2021', den: 'pa', kdo: 'Dalibor', pozn1: 'pozn1', pozn2: 'pozn2', pozn3: 'pozn3' },
      { datum: '6.1.2021', den: 'so', kdo: 'Dalibor', pozn1: 'pozn1', pozn2: 'pozn2', pozn3: 'pozn3' },
      { datum: '7.1.2021', den: 'ne', kdo: 'Dalibor', pozn1: 'pozn1', pozn2: 'pozn2', pozn3: 'pozn3' }
    ],
    editace: false
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
