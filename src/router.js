import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ThemeGenerator from './views/ThemeGenerator.vue'
import LayoutGenerator from './views/LayoutGenerator.vue'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    routes: [
        {
            path: '/',
            alias: '/home',
            component: Home
        },
        {
            path: '/theme',
            component: ThemeGenerator
        },
        {
            path: '/layout',
            component: LayoutGenerator
        }
    ]
})
