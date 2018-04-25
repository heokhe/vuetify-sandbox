import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ThemeGenerator from './views/ThemeGenerator.vue'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    routes: [
        {
            path: '/',
            redirect: '/home',
            component: Home
        },
        {
            path: '/theme/:themeName?',
            component: ThemeGenerator
        }
    ]
})
