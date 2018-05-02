<template>
	<div :style='{"background-color": this.color}' class="color-tile elevation-2" :class='{"m": $vuetify.breakpoint.mdAndUp}'></div>
</template>

<script>
export default {
	name: 'color-tile',
	props: {
		color: String
	}
}
</script>

<style lang="stylus" scoped>
.color-tile
	height 30px
	margin 1.5px
	width 100%
	display inline-block
</style>
