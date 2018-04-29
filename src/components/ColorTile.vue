<template>
	<div :style='{"background-color": this.color}' class="elevation-5 ml-2 mb-1 color-tile"></div>
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
	width 30px
	display inline-block
</style>
