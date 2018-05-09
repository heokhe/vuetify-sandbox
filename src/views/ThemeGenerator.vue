<template>
    <div v-cloak>
        <v-navigation-drawer right app v-model='drawer' floating class="elevation-5 pb-0" :permanent='!isMobile'>
            <v-toolbar flat dense color="transparent">
                <v-toolbar-title>Colors</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn small depressed @click.native='exportDialog = true; drawer = isMobile ? false : drawer'>
                    <v-icon class="mr-1" small>content_copy</v-icon> export
                </v-btn>
            </v-toolbar>
            <v-divider></v-divider>
            <v-list two-line dense class="pa-0">
                <variant-tile v-for='(hex, name) in theme' @click.native='pick(name)' :key='name' :hex='hex' :variant-name="name"></variant-tile>
            </v-list>
        </v-navigation-drawer>

        <v-toolbar flat dense app>
                <!-- <v-btn icon flat>
                    <v-icon>keyboard_arrow_left</v-icon>
                </v-btn>
                1/5
                <v-btn icon flat>
                    <v-icon>keyboard_arrow_right</v-icon>
                </v-btn> -->
            <v-btn icon flat to='/'>
                <v-icon>arrow_back</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-menu bottom left :open-on-hover='!isTouch'>
                <v-btn slot='activator' flat icon>
                    <v-icon>more_vert</v-icon>
                </v-btn>
                <v-list dense>
                    <v-list-tile @click='$store.dispatch("toggleDark")' ripple>
                        <v-list-tile-title>Toggle dark mode</v-list-tile-title>
                    </v-list-tile>
                    <v-list-tile>
                        <v-list-tile-title>Reload theme</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>
            <v-btn v-if='isMobile' @click='drawer = true' icon flat>
                <v-icon>menu</v-icon>
            </v-btn>
        </v-toolbar>

        <v-content :class="`grey ${$store.state.dark ? 'darken-4' : 'lighten-4'}`" style="height:100vh" class="d-flex">
            <v-container fill-height>
                <v-layout row align-center justify-center>
                    <v-flex xs12 md6 class="elevation-10" :class="`my-${isMobile ? 0 : 4}`">            
                        <v-app id="preview" :dark='$store.state.dark'>
                            <v-toolbar color="primary" extended prominent :light="isLight.primary" :dark='!isLight.primary'>
                                <v-spacer></v-spacer>
                                <v-btn icon flat :light="isLight.primary" :dark='!isLight.primary'>
                                    <v-icon>more_vert</v-icon>
                                </v-btn>
                                <div slot="extension">
                                    <div class="pl-4 display-1">Preview</div>
                                </div>
                                <v-btn fab color="secondary" bottom right small absolute :light='isLight.secondary'>
                                    <v-icon>edit</v-icon>
                                </v-btn>
                            </v-toolbar>
                            <div class="pa-3">
                                <div class="headline my-1">Theme Preview</div>
                                <p class="body-1 pb-0 mb-0">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis praesentium maxime ut enim suscipit aperiam incidunt magni soluta vitae, impedit explicabo excepturi deleniti esse quae quisquam velit? Cum facere asperiores recusandae, minima laborum facilis molestias! Repellat id consectetur totam vero ea velit itaque nisi esse omnis exercitationem? Culpa aliquam inventore nobis error, magnam consequuntur quisquam. Temporibus mollitia corporis pariatur rem natus nisi accusantium. Consequuntur eveniet eligendi sunt nisi fugit accusamus! Perferendis, ex. Quasi, suscipit modi.
                                </p>
                            </div>
                        </v-app>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>

        <color-picker :open.sync='picker.open' @input='setProp($event)' :prop-name="picker.activeProp" :color='picker.color'></color-picker>

        <v-dialog v-model="exportDialog" max-width="420px" transition="slide-y-transition" @keydown.esc.exact="exportDialog = false">
            <v-card>
                <v-card-text>
                    <pre class="d-block mt-2 export-code-block pa-2" :class='`grey ${$store.state.dark ? "darken" : "lighten"}-4`' ref='code'>
                        Vue.<span class="blue--text">use</span>(Vuetify, {
                            <div v-for='(color, name, i) in theme' :key='i'>
                                &nbsp;&nbsp;&nbsp;&nbsp;<span class="red--text">{{name}}</span>: <span class="orange--text">"{{color.toLowerCase()}}"</span><span v-if='i !== 2'>,</span>
                            </div>
                        })
                    </pre>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions class="justify-end">
                    <v-btn flat color="blue accent-2" @click='exportDialog = false'>close</v-btn>
                    <v-btn flat color='blue accent-2' @click="copy">copy</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import VariantTile from "../components/VariantTile.vue";
import ColorPicker from "../components/ColorPicker.vue";
import {hex} from 'color-convert';

export default {
    components: { VariantTile, ColorPicker },
    name: "theme-generator",
    data() {
        return {
            theme: null,
            picker: {
                open: false,
                activeProp: '',
            },
            drawer: false,
            mounted: false,
            exportDialog: false
        };
    },
    metaInfo() {
        return {
            title: "Theme generator"
        };
    },
    mounted() {
        this.mounted = true;

        this.theme = (({primary, accent, secondary}) => ({primary, secondary, accent}))(this.$vuetify.theme);

        // we cannot directly construct theme from storage; so we should do it for each theme property after the main construction
        if (localStorage.getItem('theme--obj')){
            let t = JSON.parse(localStorage.getItem('theme--obj'));
            this.theme.primary = t.primary
            this.theme.accent = t.accent
            this.theme.secondary = t.secondary
        }
    },
    methods: {
        pick(activeProp){
            this.picker = {
                open: true,
                activeProp
            }
            if (this.isMobile) this.drawer = false
        },
        copy(){
            let code = this.$refs.code;

            if (document.selection) { 
                let range = document.body.createTextRange();
                range.moveToElementText(code);
                range.select().createTextRange();
                document.execCommand("copy"); 
            } else {
                let range = document.createRange();
                range.selectNode(code);
                window.getSelection().addRange(range);
                document.execCommand("copy");
                this.exportDialog = false
            }
        },
        setProp({color, propName}){
            this.theme[propName] = color
            // this.$vuetify.theme[propName] = color
        }
    },
    computed: {
        isMobile() {
            return this.$vuetify.breakpoint.smAndDown;
        },
        isTouch() {
            return "ontouchstart" in window;
        },
        isLight(){
            const get = n => hex.hsl(this.theme[n])[2] > 54

            return {
                primary: get('primary'),
                secondary: get('secondary'),
                accent: get('accent')
            }
        }
    },
    beforeMount(){
        this.$watch('theme', (e) => {
            this.$vuetify.theme.primary = e.primary
            this.$vuetify.theme.secondary = e.secondary
            this.$vuetify.theme.accent = e.accent

            localStorage.setItem('theme--obj', JSON.stringify(e))
        }, {
            deep: true,
            immediate: false
        })
    }
};
</script>
<style lang='stylus'>
.color-card 
    width 30px;
    height 30px;
    display inline-block;


#preview>.application--wrap 
    min-height auto
    height calc(100vh - 120px);
    overflow auto
    > *
        flex-shrink 0 !important

.export-code-block
    line-height 1
    white-space pre-line
    border-radius 2.5px
</style>
