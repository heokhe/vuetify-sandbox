import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        dark: false
    },
    mutations: {
        toggleDark(state){
            state.dark = !state.dark
        }
    },
    getters: {
        modeIcon(state){
            return state.dark ? 'brightness_3' : 'wb_sunny'
        }
    }
})
