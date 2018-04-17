import Vue from 'vue'
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
    theme: {
        primary: colors.deepPurple.base,
        secondary: colors.amber.accent2
    }
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
