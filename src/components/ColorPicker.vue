<template>
	<v-dialog v-model="this.open" :fullscreen="$vuetify.breakpoint.smAndDown" max-width="720px" transition="slide-y-reverse-transition">
		<v-card>
			<v-toolbar>
				<v-avatar :size="32" class="red mx-3"></v-avatar>
				<div class="subheading">
					Primary Color
					<div class="caption grey--text">#485632</div>
				</div>
				<v-spacer></v-spacer>
				<v-btn icon flat color='grey' @click='close'><v-icon>close</v-icon></v-btn>
			</v-toolbar>
			<div class="pa-3">
				<div v-for="(g, i1) in $$.colors" :key='i1' class="group">
					<color-tile v-for='(c, i2) in g' :key='i2' :color="c"></color-tile>
				</div>
			</div>
		</v-card>
	</v-dialog>
</template>

<script>
import ColorTile from './ColorTile.vue';

export default {
	components: {ColorTile},
	name: 'color-picker',
	props: {
		open: {
			type: Boolean,
			required: true
		}
	},
	methods: {
		update(e){
			this.$emit('update:open', e)
		},
		close(){
			this.update(false)
		}
	}
}
</script>

<style lang="stylus" scoped>
.group
	display inline-flex
	flex-direction row
	width 100%
</style>
