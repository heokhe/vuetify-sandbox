<template>
    <v-app :dark='$store.state.dark'>
        <!-- <div style='height: 100vh;'>
            <v-container fill-height fluid class="pa-0">
                <v-layout column>
                    <v-toolbar color="primary" dark>
                        <v-toolbar-side-icon></v-toolbar-side-icon>
                        <v-toolbar-title>Vuetify Sandbox</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-btn flat icon @click='$store.commit("toggleDark")'>
                            <v-icon>{{$store.getters.modeIcon}}</v-icon>
                        </v-btn>
                    </v-toolbar>
                    <div style="height: 100%; overflow: auto">
                        <keep-alive>
                            <router-view></router-view>
                        </keep-alive>
                    </div>
                    <v-bottom-nav shift :value="true" style='flex-shrink: 0;'>
                        <v-btn to='/theme'>
                            <span>Theme generator</span>
                            <v-icon>palette</v-icon>
                        </v-btn>
                        <v-btn to='/home'>
                            <span>Home</span>
                            <v-icon>home</v-icon>
                        </v-btn>
                        <v-btn to='/layout'>
                            <span>Layout generator</span>
                            <v-icon>view_quilt</v-icon>
                        </v-btn>
                    </v-bottom-nav>
                </v-layout>
            </v-container>
        </div> -->
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </v-app>
</template>

<script>
export default {
    name: 'App'
}
</script>
