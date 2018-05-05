<template>
	<v-checkbox v-model='checked' :label="this.text" hide-details :color='$store.state.dark ? "accent" : "secondary"'></v-checkbox>
</template>

<script>
export default {
	data(){
		return {
			checked: this.model
		}
	},
	name: 'layout-checkbox',
	props: {
		text: String,
		model: Boolean
	},
	watch: {
		checked(e){
			this.$emit('update:model', e)
		}
	}
}
</script>