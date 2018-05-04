import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        dark: (localStorage.getItem('app--dark') === 'true') || false
    },
    mutations: {
        toggleDark(state){
            state.dark = !state.dark
        }
    },
    actions: {
        toggleDark({commit, state}){
            commit('toggleDark');
            localStorage.setItem('app--dark', String(state.dark))
        }
    }
})
