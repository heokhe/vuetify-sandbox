<template>
    <v-app :dark='$store.state.dark' @keydown.ctrl.alt.68.exact.native="$store.dispatch('toggleDark')" tabindex="1">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </v-app>
</template>

<script>
export default {
    name: 'App',
    mounted(){
        this.$el.focus()
        document.querySelector('meta[name="theme-color"]').remove()
    }
}
</script>
