<template>
    <div>
        <v-toolbar app absolute ref='toolbar' class="elevation-1">
            <v-btn flat icon to='/'>
                <v-icon>arrow_back</v-icon>
            </v-btn>
            <v-toolbar-title>Theme generator</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn flat icon @click='$store.commit("toggleDark")'>
                <v-icon>{{$store.getters.modeIcon}}</v-icon>
            </v-btn>
            <v-menu left>
                <v-btn flat icon slot='activator'>
                    <v-icon>more_vert</v-icon>
                </v-btn>
                <v-list dense>
                    <v-list-tile>
                        <v-list-tile-title>Save theme</v-list-tile-title>
                    </v-list-tile>
                    <v-list-tile>
                        <v-list-tile-title>Reload theme</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>
            <v-btn v-if='isMobile' flat @click='showVariants = !showVariants' icon>
                <v-icon>menu</v-icon>
            </v-btn>
        </v-toolbar>
        <v-navigation-drawer right app v-model='showVariants' floating class="elevation-2 pb-0" :permanent='!isMobile'>
            <v-toolbar class="elevation-1" color="transparent">
                <v-toolbar-title>Color variants</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn class="elevation-3" small color="primary">export</v-btn>
            </v-toolbar>
            <v-list two-line dense class="pa-0">
                <variant-tile v-for='(hex, name) in theme.colors' :key='name' :hex='hex' :variant-name="name"></variant-tile>
                <v-divider></v-divider>
                <v-list-tile v-ripple avatar @click='toggleDark'>
                    <v-list-tile-avatar>
                        <v-avatar style='flex-shrink: 0' :size='32'>
                            <v-icon>{{theme.dark ? 'brightness_3' : 'wb_sunny'}}</v-icon>
                        </v-avatar>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title>Dark Theme</v-list-tile-title>
                        <v-list-tile-sub-title>{{theme.dark ? 'On' : 'Off'}}</v-list-tile-sub-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-content>
            <v-container class="ma-0 pa-0" fluid>
                <v-layout row wrap align-center justify-center>
                    <v-flex xs12 sm10 md8 lg5 class="mx-1 elevation-24" :style='{height, "overflow-y": "auto"}'>
                        <v-app :dark='theme.dark' id='preview'>
                            <v-toolbar color="primary" extended prominent>
                                <v-toolbar-side-icon></v-toolbar-side-icon>
                                <v-toolbar-title>Test</v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-btn icon flat>
                                    <v-icon>search</v-icon>
                                </v-btn>
                                <v-btn color="accent" fab bottom right absolute>
                                    <v-icon>add</v-icon>
                                </v-btn>
                            </v-toolbar>
                        </v-app>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </div>
</template>

<script>
import VariantTile from '../components/VariantTile.vue';

export default {
    name: 'theme-generator',
    components: {
        VariantTile
    },
    metaInfo(){
        return {
            title: 'Theme generator'
        }
    },
    mounted() {
        this.mounted = true
    },
    data(){
        return {
            theme: {
                colors: this.$vuetify.theme,
                dark: false
            },
            showVariants: true,
            mounted: false
        }
    },
    methods: {
        toggleDark(){
            this.theme.dark = !this.theme.dark
        }
    },
    computed: {
        isMobile(){
            return this.$vuetify.breakpoint.smAndDown
        },
        colors(){
            let {theme} = this;
            delete theme.dark;
            return theme
        },
        height(){
            return this.mounted ? (!this.isMobile ? `calc(100vh - ${this.$refs.toolbar.computedHeight}px)` : 'auto') : 0
        },
        sideBarStyle(){
            return this.mounted ? {
                height: this.height,
                'overflow-y': 'auto',
                'overflow-x': 'visible',
                order: this.isMobile ? '-1' : '1'
            } : {}
        },
        sideBarProps(){
            let prop = this.isMobile ? 'xs12' : 'xs3';
            return {
                [prop]: true
            }
        },
        previewProps(){
            return {
                xs12: this.isMobile ? true : !this.showVariants,
                xs9: this.isMobile ? false : this.showVariants
            }
        }
    }
}
</script>
<style lang='stylus'>
    .color-card
        width 30px
        height 30px
        display inline-block
</style>
