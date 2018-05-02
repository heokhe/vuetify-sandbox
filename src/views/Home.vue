<template>
    <div>
        <v-toolbar color="transparent" flat fixed>
            <!-- <v-toolbar-title>Vuetify Sandbox</v-toolbar-title> -->
            <v-spacer></v-spacer>
        </v-toolbar>
        <v-jumbotron :color="!dark ? 'grey lighten-2' : 'primary'" class="elevation-3" height="auto">
            <v-container fill-height>
                <v-layout align-center :column='isMobile'>
                    <v-flex xs12 md3 class="text-xs-right">
                        <img class="main--logo" src="../assets/512.png" :width='logoWidth' alt="Logo">
                    </v-flex>
                    <v-flex xs12 md9 :class="{'text-xs-center': isMobile, 'pl-5 py-5': !isMobile}">
                        <h1 class="display-3 mb-1">Vuetify Sandbox</h1>
                        <div class="subheading">A tool for building Vuetify themes and layouts with ease.</div>
                        <div class="mt-2">
                            <v-btn class="mx-0" href='https://github.com/hkh12/vuetify-sandbox'>view on github</v-btn>
                            <v-btn color="secondary">get started</v-btn>
                        </div>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-jumbotron>
        <div class="mt-3">
            <v-container>
                <v-layout row wrap align-center>
                    <v-flex xs4 class="text-xs-center">
                        <v-icon :size='128' color="primary darken-1">close</v-icon>
                    </v-flex>
                    <v-flex xs8>
                        <div class="display-1 mb-2">PWA on it's best form.</div>
                        <div class="body-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, nemo voluptatem praesentium omnis facilis veritatis quaerat minus nisi fugiat sequi cumque nihil recusandae delectus possimus. Consectetur dolorum aperiam recusandae tempora. Laudantium autem voluptate asperiores assumenda illo porro voluptatibus dolores expedita quae aperiam quia cumque, officiis veritatis blanditiis at voluptatum quibusdam ex minima unde consequuntur quas qui? Nulla culpa sed minima facere, temporibus nemo fugit sequi voluptate provident. Voluptate rerum neque eius maxime, inventore distinctio ipsam voluptatibus optio consequatur excepturi magnam ea magni eaque officia esse perspiciatis sit non quae fuga veniam voluptas. Accusamus voluptatibus minus, nam officia praesentium optio dolore.
                        </div>
                    </v-flex>
                </v-layout>
            </v-container>
        </div>
    </div>
</template>
<script>
export default {
    name: 'home',
    computed: {
        isMobile(){
            return this.$vuetify.breakpoint.smAndDown
        },
        dark(){
            return this.$store.state.dark
        },
        logoWidth(){
            return this.isMobile ? 128 : '75%'
        }     
    }
}
</script>
<style lang="stylus" scoped>
// .main--logo
//     filter drop-shadow(0 6px 8px rgba(#000, .24))
</style>
