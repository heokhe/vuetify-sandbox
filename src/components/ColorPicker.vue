<template>
	<!-- <v-dialog v-model="dialog" max-width="640px" transition="slide-y-reverse-transition" :fullscreen='$vuetify.breakpoint.smAndDown'>
		<v-card>
			<v-toolbar style='position: sticky' color='primary'>
				<v-avatar class="elevation-3 mx-3" :style='previewStyles' :size='32'></v-avatar>
				<div class="subheading" style='line-height: 1.32; font-weight: 500'>
					<div>Primary Color</div>
					<div class="caption" style='opacity: .54'>{{color}}</div>
				</div>
				<v-spacer></v-spacer>
				<v-btn icon flat @click='dialog = false'>
					<v-icon>close</v-icon>
				</v-btn>
			</v-toolbar>
			<div class="mt-3">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, eveniet ex molestias recusandae aliquid reiciendis voluptatum voluptatibus dignissimos, excepturi aliquam quibusdam voluptate, quos aspernatur quis dolore quaerat deserunt ipsam earum? Ut, quasi optio perspiciatis voluptatem illo vitae vero, rem molestias in doloremque enim voluptatibus beatae modi dolorum amet asperiores dolor ipsa ullam, velit unde incidunt quia eligendi pariatur mollitia! Tempora sequi, asperiores incidunt dolor dolore amet consequatur dolorem, voluptatibus, possimus delectus eos eum dolorum ipsam natus officiis alias quam in! Quisquam laborum maxime praesentium eaque, voluptates quasi consectetur quibusdam exercitationem at cupiditate vitae. Vel illo quisquam dolor mollitia quis! Nostrum?
			</div>
		</v-card>
	</v-dialog> -->
	<div v-if='dialog'>
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates asperiores vitae exercitationem ducimus eligendi, quod cupiditate quidem dolorum rem nihil blanditiis doloremque quis laudantium est ipsa nobis cumque! Officia harum soluta fugit rem quasi fugiat consequuntur voluptatem illum laborum debitis culpa neque alias rerum illo modi maxime, voluptatibus laudantium ab porro id eos! Repudiandae modi deleniti ab ipsum officia voluptates distinctio corporis eaque corrupti vero, in fugit quibusdam voluptatibus harum debitis deserunt, dolores cupiditate tempora eligendi sint expedita. Placeat molestias maiores atque, commodi rerum aut doloremque perferendis incidunt, tempora repellendus soluta laborum consectetur veniam minima qui dicta temporibus hic facilis. Fugit, accusantium hic corporis suscipit numquam facere asperiores doloribus pariatur quaerat alias, facilis veniam earum nulla impedit non odit necessitatibus.
	</div>
</template>

<script>
import ColorTile from '../components/ColorTile.vue';
// import {rgb, hex} from 'color-convert';
import colors from 'vuetify/es5/util/colors';

let primaryColors = colors;

export default {
	name: 'color-picker',
	model: {
		prop: 'open',
		event: 'toggle'
	},
	props: {
		open: Boolean
	},
	components: {ColorTile},
	data(){
		return {
			dialog: this.open,
			primaryColors,
			color: '#4dc123'
		}
	},
	watch: {
		dialog(){
			this.$emit('toggle', this.dialog)
		}
	}
}
</script>
<style lang="stylus" scoped>
.group
	display flex
	flex-direction row
</style>
