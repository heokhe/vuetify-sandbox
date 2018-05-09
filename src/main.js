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

const vm = new Vue({
    router,
    store,
    render: h => h(App),
    metaInfo: () => ({
        titleTemplate: t => `${t ? t + ' — ' : ''}Vuetify Sandbox`,
        meta: [{
            name: 'theme-color',
            content: store.state.dark ? '#212121' : theme.primary
        }]
    })
}).$mount('#app')

router.beforeEach((to, from, next) => {
    if (from.path === '/theme') {
        vm.$vuetify.theme.primary = theme.primary
        vm.$vuetify.theme.accent = theme.accent
        vm.$vuetify.theme.secondary = theme.secondary
    }
    next()
})

Vue.config.productionTip = false

import './registerServiceWorker'