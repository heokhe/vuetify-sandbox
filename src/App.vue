<template>
    <v-app :dark='$store.state.dark' @keydown.ctrl.alt.68.exact.native="$store.dispatch('toggleDark')" tabindex="1">
        <router-view></router-view>
    </v-app>
</template>

<script>
import defaultTheme from './theme'
export default {
    name: 'App',
    created(){
        document.querySelector('meta[name="theme-color"]').remove()
    },
    mounted(){
        this.$el.focus()
        this.$router.beforeEach((to, from, next) => {
            if (from.path === '/theme') {
                this.$vuetify.theme.primary = defaultTheme.primary
                this.$vuetify.theme.accent = defaultTheme.accent
                this.$vuetify.theme.secondary = defaultTheme.secondary
            }
            next()
        })
    }
}
</script>
