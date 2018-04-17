<template>
    <v-app :dark='$store.state.dark'>
        <v-bottom-nav shift :active='1' :value="true" fixed>
            <v-btn :dark='$store.state.dark'>
                <span>Theme generator</span>
                <v-icon>palette</v-icon>
            </v-btn>
            <v-btn :dark='$store.state.dark'>
                <span>Home</span>
                <v-icon>home</v-icon>
            </v-btn>
            <v-btn :dark='$store.state.dark'>
                <span>Layout generator</span>
                <v-icon>view_quilt</v-icon>
            </v-btn>
        </v-bottom-nav>
        <router-view></router-view>
    </v-app>
</template>

<script>
export default {
    name: 'App'
}
</script>
