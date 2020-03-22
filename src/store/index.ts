import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dny: [
      { id: 9, datum: '1.1.2021', den: 'po', kdo: 'Janik', pozn1: 'pozn1', pozn2: 'pozn2', pozn3: 'pozn3' },
      { id: 2, datum: '2.1.2021', den: 'ut', kdo: 'Janik', pozn1: 'pozn1', pozn2: 'pozn2', pozn3: 'pozn3' },
      { id: 3, datum: '3.1.2021', den: 'st', kdo: 'Janik', pozn1: 'pozn1', pozn2: 'pozn2', pozn3: 'pozn3' },
      { id: 4, datum: '4.1.2021', den: 'ct', kdo: 'Janik', pozn1: 'pozn1', pozn2: 'pozn2', pozn3: 'pozn3' },
      { id: 5, datum: '5.1.2021', den: 'pa', kdo: 'Dalibor', pozn1: 'pozn1', pozn2: 'pozn2', pozn3: 'pozn3' },
      { id: 6, datum: '6.1.2021', den: 'so', kdo: 'Dalibor', pozn1: 'pozn1', pozn2: 'pozn2', pozn3: 'pozn3' },
      { id: 7, datum: '7.1.2021', den: 'ne', kdo: 'Dalibor', pozn1: 'pozn1', pozn2: 'pozn2', pozn3: 'pozn3' }
    ],
    chaty: [
      { id: 1, denId: 9, kdo: 'Janik', text: 'Tak to teda nevím' },
      { id: 2, denId: 9, kdo: 'Tomik', text: 'Zato ja vim' },
      { id: 3, denId: 2, kdo: 'Janik', text: 'Dneska taky nic nevim' },
      { id: 4, denId: 9, kdo: 'Janik', text: 'To nebude ono' },
      { id: 5, denId: 9, kdo: 'Tomik', text: 'Finálně!!!!' },
      { id: 6, denId: 3, kdo: 'Janik', text: 'Ddneska jsem zase dutej' }
    ]

  },
  getters: {
    denByID: (state) => (id: number) => {
      return state.dny.find(den => den.id === id)
    },
    // neni last chat
    lastChat: (state) => (denId: number) => {
      const chatyDen = state.chaty.filter(chaty => chaty.denId === denId)
      if (chatyDen.length > 0) {
        const chatMaxId = chatyDen.reduce(function (prev, current) {
          if (+current.id > +prev.id) {
            return current
          } else {
            return prev
          }
        })
        const chat = state.chaty.find(chaty => chaty.id === chatMaxId.id)
        return chat.kdo + '  napsal ' + chat.text
      }
    },
    karty: (state) => (id: number) => {
      const chatyDen = state.chaty.filter(chaty => chaty.denId === id)

      const chatMaxId = chatyDen.reduce(function (prev, current) {
        if (+current.id > +prev.id) {
          return current
        } else {
          return prev
        }
      })
      return {
        den: state.dny.find(den => den.id === id),
        chat: state.chaty.find(chaty => chaty.id === chatMaxId.id)
      }
    }

  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
