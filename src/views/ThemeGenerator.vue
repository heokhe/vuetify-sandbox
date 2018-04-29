<template>
    <div>
        <v-navigation-drawer right app v-model='drawer' floating class="elevation-2 pb-0" :permanent='!isSmallDevice'>
            <v-toolbar flat dense color="transparent">
                <v-toolbar-title>Colors</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn depressed small color='primary'>
                    <v-icon class="mr-1" small>content_copy</v-icon> export
                </v-btn>
            </v-toolbar>
            <v-divider></v-divider>
            <v-list two-line dense class="pa-0">
                <variant-tile v-for='(hex, name) in theme.colors' :key='name' :hex='hex' :variant-name="name"></variant-tile>
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
            <v-btn fab fixed top left small to='/'>
                <v-icon>arrow_back</v-icon>
            </v-btn>
            <v-menu top right transition="fade-transition" :open-on-hover='!isTouch'>
                <v-btn fab fixed bottom left slot='activator' flat small>
                    <v-icon>more_vert</v-icon>
                </v-btn>
                <v-list dense>
                    <v-list-tile @click='$store.commit("toggleDark")' ripple>
                        <v-list-tile-title>Toggle dark mode</v-list-tile-title>
                    </v-list-tile>
                    <v-divider></v-divider>
                    <v-list-tile>
                        <v-list-tile-title>Save theme</v-list-tile-title>
                    </v-list-tile>
                    <v-list-tile>
                        <v-list-tile-title>Reload theme</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>
            <v-btn fab fixed small top right color='secondary' v-if='isSmallDevice' @click='drawer = true' @keydown.esc.exact='drawer = false'>
                <v-icon>menu</v-icon>
            </v-btn>
            <v-container class="pa-0 mt-3" fluid>
                <v-layout row wrap align-center justify-center>
                    <v-flex xs12 sm10 md8 lg5 class="elevation-24 my-5 mx-3">
                        <v-app :dark='theme.dark' id='preview'>
                            <v-toolbar color="primary" extended prominent>
                                <v-toolbar-side-icon></v-toolbar-side-icon>
                                <v-toolbar-title>Preview</v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-btn icon flat>
                                    <v-icon>search</v-icon>
                                </v-btn>
                                <v-btn @click='picker = true' color="accent" light fab bottom right absolute small>
                                    <v-icon>add</v-icon>
                                </v-btn>
                            </v-toolbar>
                            <div class="body-1 pa-3">
                                <div class="headline mb-1">Theme Preview</div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus quidem unde cumque ipsam adipisci eos aperiam culpa, assumenda eveniet ut fuga, quasi perferendis consequatur? Error quibusdam perferendis architecto maiores earum non ipsam dolore necessitatibus, aspernatur consequatur excepturi natus itaque, voluptatem nostrum deleniti nobis. Id atque consequuntur quo excepturi, omnis aliquid harum accusantium eaque, at tempora quis ipsum laudantium dicta voluptas voluptate iste facilis, eveniet repellendus.
                            </div>
                        </v-app>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
        <color-picker v-model='picker'></color-picker>
    </div>
</template>

<script>
import VariantTile from '../components/VariantTile.vue';
import ColorPicker from '../components/ColorPicker.vue';

export default {
    name: 'theme-generator',
    components: {VariantTile, ColorPicker},
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
            picker: false,
            drawer: false,
            mounted: false
        }
    },
    methods: {
        toggleDark(){
            this.theme.dark = !this.theme.dark
        }
    },
    computed: {
        isSmallDevice(){
            return this.$vuetify.breakpoint.smAndDown
        },
        isTouch(){
            return 'ontouchstart' in window;
        },
        isMobile(){
            return this.isTouch && this.isSmallDevice
        },
        colors(){
            let {theme} = this;
            delete theme.dark;
            return theme
        },
        height(){
            return this.mounted ? (!this.isSmallDevice ? `calc(100vh - ${this.$refs.toolbar.computedHeight}px)` : 'auto') : 0
        },
        sideBarStyle(){
            return this.mounted ? {
                height: this.height,
                'overflow-y': 'auto',
                'overflow-x': 'visible',
                order: this.isSmallDevice ? '-1' : '1'
            } : {}
        },
        sideBarProps(){
            let prop = this.isSmallDevice ? 'xs12' : 'xs3';
            return {
                [prop]: true
            }
        },
        previewProps(){
            return {
                xs12: this.isSmallDevice ? true : !this.drawer,
                xs9: this.isSmallDevice ? false : this.drawer
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

    #preview>.application--wrap
        min-height calc(100vh - 160px)
</style>
