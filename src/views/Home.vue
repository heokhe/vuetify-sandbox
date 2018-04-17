<template>
    <v-toolbar color="primary" dark>
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title>Vuetify Sandbox</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn flat icon @click='$store.commit("toggleDark")'>
            <v-icon>{{$store.getters.modeIcon}}</v-icon>
        </v-btn>
    </v-toolbar>
</template>
<script>
    export default {
        name: 'home'
    }
</script>
