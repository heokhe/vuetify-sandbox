import Vue from 'vue'
import VueMeta from 'vue-meta'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import './styles/index.styl'
import "./plugin"
import colors from 'vuetify/es5/util/colors'
import App from './App.vue'

Vue.use(Vuetify, {
    theme: {
        primary: colors.amber.darken1,
        secondary: colors.blue.accent3,
        accent: colors.lightBlue.accent1
    },
    options: {
        minifyTheme: t => t.replace(/\s/g, '')
    }
})

Vue.use(VueMeta)

Vue.config.productionTip = false

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
