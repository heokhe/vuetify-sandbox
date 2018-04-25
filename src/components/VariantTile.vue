<template>
	<v-list-tile v-ripple avatar ref='root'>
		<v-list-tile-avatar>
			<v-avatar :style='{"background-color": this.hex}' style='flex-shrink: 0' :size='32'></v-avatar>
		</v-list-tile-avatar>
		<v-list-tile-content>
			<v-list-tile-title>{{name}}</v-list-tile-title>
			<v-list-tile-sub-title>{{this.hex}}</v-list-tile-sub-title>
		</v-list-tile-content>
	</v-list-tile>
</template>

<script>
export default {
	name: 'variant-tile',
	props: {
		variantName: String,
		hex: String
	},
	computed: {
		name(){
			const v = this.variantName;
			return v.charAt(0).toUpperCase() + v.substring(1, v.length) + ' color'
		}
	},
	mounted(){
		let {$el} = this.$refs.root;

		const trigger = () => this.$emit('active')

		$el.addEventListener('click', trigger)

		let timer = null;

		$el.addEventListener('mousedown', () => {
			timer = setTimeout(trigger, 3000)
		})
		$el.addEventListener('mouseup', () => {
			clearInterval(timer)
		})
	}
}
</script>

<style scoped>

</style>
