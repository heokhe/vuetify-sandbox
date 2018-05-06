import Vue from 'vue'

import Vuetify from 'vuetify'
import theme from './theme'
import 'vuetify/dist/vuetify.min.css'
import './styles/index.styl'
Vue.use(Vuetify, {
    theme,
    options: {
        minifyTheme: t => t.replace(/\s/g, '')
    }
})

import VueMeta from 'vue-meta'
Vue.use(VueMeta)

import router from './router'
import store from './store'
import App from './App.vue'

new Vue({
    router,
    store,
    render: h => h(App),
    metaInfo: function() {
        let _ = this;
        return {
            titleTemplate: t => `${t ? t + ' — ' : ''}Vuetify Sandbox`,
            meta: [{
                name: 'theme-color',
                content: _.$store.state.dark ? '#212121' : _.$vuetify.theme.primary
            }]
        }
    }
}).$mount('#app')

Vue.config.productionTip = false

import './registerServiceWorker'