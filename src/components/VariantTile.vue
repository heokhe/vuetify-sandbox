<template>
    <v-list-tile v-ripple avatar ref='root'>
        <v-list-tile-avatar>
            <v-avatar :style='{"background-color": this.hex}' style='flex-shrink: 0' :size='32'></v-avatar>
        </v-list-tile-avatar>
        <v-list-tile-content>
            <v-list-tile-title class="var-title">{{this.variantName}}</v-list-tile-title>
            <v-list-tile-sub-title class="var-hex">{{this.hex}}</v-list-tile-sub-title>
        </v-list-tile-content>
    </v-list-tile>
</template>

<script>
export default {
    name: 'variant-tile',
    props: {
        variantName: String,
        hex: String
    }
}
</script>

<style lang='stylus' scoped>
    .var-title
        text-transform: capitalize
    .var-hex
        text-transform: uppercase
</style>
