import Vue from 'vue'
import VueMeta from 'vue-meta'
import router from './router'
import store from './store'
import './registerServiceWorker'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import './styles/index.styl'
import colors from 'vuetify/es5/util/colors'

import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Vuetify, {
    rtl : true,
    theme: {
        primary: colors.amber.darken1,
        secondary: colors.blue.accent3,
        accent: colors.lightBlue.accent1
    }
})

Vue.use(VueMeta)

new Vue({
    router,
    store,
    render: h => h(App),
    metaInfo: {
        title: 'home',
        titleTemplate: '%s — Vuetify Sandbox'
    }
}).$mount('#app')
