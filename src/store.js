import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        dark: Boolean(localStorage.getItem('app--dark')) || false
    },
    mutations: {
        toggleDark(state){
            state.dark = !state.dark
        },
        theme(state, prop, color){
            state.theme[prop] = color
        }
    },
    actions: {
        toggleDark({commit, state: {dark}}){
            commit('toggleDark');
            localStorage.setItem('app--dark', String(dark))
        }
    }
})
