<template>
    <div>
        <v-container fill-height fluid>
            <v-layout>
                <v-flex xs9>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, similique.
                </v-flex>
                <v-flex xs3>
                    <div v-for='(color, name) in colors'>
                        <div style='height: 30px; width: 30px;' v-for='shade in color' :style='{"background-color": shade}' :key='shade'>
                        </div>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import colors from 'vuetify/es5/util/colors';

export default {
    name: 'theme-generator',
    data(){
        return {
            colors
        }
    }
}
</script>
