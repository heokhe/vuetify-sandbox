<template>
    <div v-if='mounted'>
        <v-navigation-drawer right app v-model='drawer' floating class="elevation-5 pb-0" :permanent='!isSmallDevice'>
            <v-toolbar flat dense color="transparent">
                <v-toolbar-title>Colors</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn depressed small color='primary'>
                    <v-icon class="mr-1" small>content_copy</v-icon> export
                </v-btn>
            </v-toolbar>
            <v-divider></v-divider>
            <v-list two-line dense class="pa-0" style='height: 55%; overflow-y: auto'>
                <variant-tile v-for='(hex, name) in theme' @click.native='picker.open = true' :key='name' :hex='hex' :variant-name="name"></variant-tile>
            </v-list>
            <v-divider></v-divider>
            <div style='height: calc(45% - 50px); overflow-y: auto'>
            </div>
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
                    <v-list-tile @click='$store.dispatch("toggleDark")' ripple>
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
                                <v-toolbar-title>Preview</v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-btn icon flat>
                                    <v-icon>refresh</v-icon>
                                </v-btn>
                                <v-btn icon flat>
                                    <v-icon>search</v-icon>
                                </v-btn>
                                <v-btn icon flat>
                                    <v-icon>more_vert</v-icon>
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
        <!-- <color-picker :open.sync='picker.open'></color-picker> -->
    </div>
</template>

<script>
import VariantTile from "../components/VariantTile.vue";
import ColorPicker from "../components/ColorPicker.vue";

export default {
  name: "theme-generator",
  components: { VariantTile, ColorPicker },
  metaInfo() {
    return {
      title: "Theme generator"
    };
  },
  mounted() {
    this.mounted = true;

    this.theme = this.$vuetify.theme
  },
  data() {
    return {
      theme: null,
      picker: {
        open: false,
        activeProp: "primary"
      },
      drawer: false,
      mounted: false
    };
  },
  methods: {
    toggleDark() {
      this.theme.dark = !this.theme.dark;
    }
  },
  computed: {
    isSmallDevice() {
      return this.$vuetify.breakpoint.smAndDown;
    },
    isTouch() {
      return "ontouchstart" in window;
    },
    isMobile() {
      return this.isTouch && this.isSmallDevice;
    }
  }
};
</script>
<style lang='stylus'>
.color-card 
    width 30px;
    height 30px;
    display inline-block;


#preview>.application--wrap 
    min-height calc(100vh - 160px);

</style>
