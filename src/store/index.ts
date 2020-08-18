import Vue from "vue";
import Vuex, { Store } from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dny: [
      {
        id: 9,
        datum: "1.1.2021",
        den: "po",
        kdo: "Janik",
        pozn1: "pozn1",
        pozn2: "pozn2",
        pozn3: "pozn3",
      }
    ],
    chaty: [],
    kdo: null,
    idToken: null,
  },
  getters: {
    denByID: (state) => (id: number) => {
      return state.dny.find((den) => den.id === id);
    },
    // upraveno pro novy backend /chat/lastchat kdy vracim do uvodni obrazovky jen last chaty v kazdem dnu
   // TOHLE musim opravt delal jsem to dnes a spatne jsem si to prepsal
    lastChat: (state) => (denid: number) => {
      const chatyDen :any = state.chaty.filter((chaty) => chaty.denid === denid)
      
      if (chatyDen.length > 0) {
        const chatMaxId = chatyDen.reduce(function (prev, current) {
          if (+current.id > +prev.id) {
            return current;
          } else {
            return prev;
          }
        });
        const chat = state.chaty.find((chaty) => chaty.id === chatMaxId.id);
         return `${chat.kdo} napsal ${chat.text} v ${chat.datum}`
      } else {
        return 'Není zatím poznámka'
      }
    },
    chatyDen: (state) => (denId: number) => {
      return state.chaty.filter((chaty) => denId === chaty.denid);
    },
    karty: (state) => (id: number) => {
      const chatyDen = state.chaty.filter((chaty) => chaty.denid === id);

      const chatMaxId = chatyDen.reduce(function (prev, current) {
        if (+current.id > +prev.id) {
          return current;
        } else {
          return prev;
        }
      });
      return {
        den: state.dny.find((den) => den.id === id),
        chat: state.chaty.find((chaty) => chaty.id === chatMaxId.id),
      };
    },
    lastChatId: (state) => () => {
      const lastchat = state.chaty.reduce(function (prev, current) {
        if (+current.id > +prev.id) {
          return current;
        } else {
          return prev;
        }
      });
      return lastchat.id;
    },
  },
  mutations: {
    INSERT_CHAT(state, chat) {
      state.chaty.push(chat);
      // $set(this.chaty, this.lastChatId - 1, chat)
    },
    SAVE_EDIT(state, pDen) {
      const denIndex = state.dny.findIndex((nden) => nden.id === pDen.id);
      state.dny[denIndex] = pDen;
        },
    SAVE_LOGIN(state, login) {
      state.kdo = login.login;
      state.idToken = login.idToken;
        },
    DELETE_TOKEN(state) {
      state.idToken = "";
    },
    LOAD_DATA(state:any, data:any) {
      state.dny = data.res;
       data.res2.forEach( function( item1:any) {
        let check = state.chaty.find((store)=> store.id === item1.id)||'neniVeState'
         if (typeof check === 'string'){
        state.chaty.push(item1)
        check = 'reset'
    
        }
       })
      },
    LOAD_CHATY(state:any,data:any){
      data.forEach( function( item1:any) {
         let check = state.chaty.find((store)=> store.id === item1.id)||'neniVeState'
          if (typeof check === 'string'){
        state.chaty.push(item1)
        check = 'reset'
             }
    })
    }
  },
  actions: {
    async insertChat ({ commit }, payload) {
      const res:any = await axios.post(process.env.VUE_APP_BCK_URL+'/chaty',payload)
      commit("INSERT_CHAT", res.data)
     },
    saveEdit: ({ commit }, payload) => {
      commit("SAVE_EDIT", payload);
    },
    saveLogin: ({ commit }, payload: { login: string; password: string }) => {
      
      const idToken = Math.random().toString(36).substr(2);
      const celyLogin: { login: string; password: string; idToken?: string } = {
        login: payload.login,
        password: payload.password,
        idToken,
      };
      celyLogin.idToken = idToken;
      commit("SAVE_LOGIN", celyLogin);
    },
    removeToken: ({ commit }) => {
      commit("DELETE_TOKEN");
    },
    async initLoad({ commit }) {
      // const res = await axios.get(process.env.BCK_URL + '/dny')
      const [res,res2] = await Promise.all(
        [ axios.get(process.env.VUE_APP_BCK_URL+'/dny'),
         axios.get(process.env.VUE_APP_BCK_URL+'/chaty/lastchat')]
      );
      commit("LOAD_DATA", {res:res.data,res2:res2.data})
    },
   async loadChaty({commit},denid){
      const res = await axios.get(process.env.VUE_APP_BCK_URL+'/chaty/'+denid)
      commit('LOAD_CHATY',res.data)
      
    }
  },
    modules: {},
});
