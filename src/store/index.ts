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
      { id: 1, datum: '9.5.2020 16:32:21', denId: 9, kdo: 'Janik', text: 'Tak to teda nevím' },
      { id: 2, datum: '9.5.2020 17:32:16', denId: 9, kdo: 'Tomik', text: 'Zato ja vim' },
      { id: 3, datum: '6.5.2020 09:12:21', denId: 2, kdo: 'Janik', text: 'Dneska taky nic nevim' },
      { id: 4, datum: '10.5.2020 02:45:55', denId: 9, kdo: 'Janik', text: 'To nebude ono' },
      { id: 5, datum: '11.5.2020 19:32:01', denId: 9, kdo: 'Tomik', text: 'Finálně!!!!' },
      { id: 6, datum: '15.5.2020 09:00:21', denId: 3, kdo: 'Janik', text: 'Ddneska jsem zase dutej' }
    ],
    kdo: null,
    idToken: null

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
    chatyDen: (state) => (denId: number) => {
      return state.chaty.filter(chaty => denId === chaty.denId)
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
    },
    lastChatId: (state) => () => {
      const lastchat = state.chaty.reduce(function (prev, current) {
        if (+current.id > +prev.id) {
          return current
        } else {
          return prev
        }
      })
      return lastchat.id
    }
  },
  mutations: {
    INSERT_CHAT (state, chat) {
      state.chaty.push(chat)
      // $set(this.chaty, this.lastChatId - 1, chat)
    },
    SAVE_EDIT (state, pDen) {
      const denIndex = state.dny.findIndex(nden => nden.id === pDen.id)
      state.dny[denIndex] = pDen
      console.log(state.dny)
    },
    SAVE_LOGIN (state, login) {
      state.kdo = login.login
      state.idToken = login.idToken
      console.log(login)
    },
    DELETE_TOKEN(state){
      state.idToken=''
    }
  },
  actions: {
    insertChat: ({ commit }, payload) => {
      commit('INSERT_CHAT', payload)
    },
    saveEdit: ({ commit }, payload) => {
      commit('SAVE_EDIT', payload)
    },
    saveLogin: ({ commit }, payload: {login: string;password: string}) => {
      //console.log(payload)
      const idToken = Math.random().toString(36).substr(2)
      const celyLogin: {login: string; password: string; idToken?: string} = { login: payload.login, password: payload.password, idToken }
      //console.log(celyLogin)
      celyLogin.idToken = idToken
      //console.log(celyLogin)
      commit('SAVE_LOGIN', celyLogin)
    },
    removeToken:({commit})=>{
        commit('DELETE_TOKEN')
    }
  },
  modules:{

  }
})
