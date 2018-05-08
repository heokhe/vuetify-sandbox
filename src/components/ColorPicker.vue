<template>
	<v-dialog v-model="this.open" :fullscreen="mob" max-width="720px" transition="slide-y-reverse-transition" lazy @keydown.esc.exact="close">
		<v-card>
			<v-card-title class="pt-2 mb-0">
				<v-avatar :size="32" class="mr-3 elevation-1" :style='{"background-color": color}'></v-avatar>
				<div class="subheading">
					<div style="text-transform: capitalize">
						{{this.propName}} color
					</div>
					<div class="caption grey--text">{{color}}</div>
				</div>
				<v-spacer></v-spacer>
				<v-btn icon flat color='grey' class="mr-0" @click='close'><v-icon>close</v-icon></v-btn>
			</v-card-title>
			<div class="pa-3">
				<div class="color-groups elevation-5">
					<div class="color-group" v-ripple v-for="cg in colorGroups" @click='activeGroup = cg' :key='cg' :class='cg'></div>
					<div class="shades" :class='{active: !!activeGroup, accents: showAccents}'>
						<div class="shade" @click='finalizeColor(sh)' v-ripple v-for='sh in (showAccents ? accentShades : shades)' :key='sh' :class="activeGroup + sh"></div>
						<div class="details-bar d-flex align-center justify-space-between px-2">
							<v-btn flat icon class="ma-0" @click.native="activeGroup = null" dark>
								<v-icon>arrow_back</v-icon>
							</v-btn>
							<v-btn class="ma-0" flat small dark @click.native='showAccents = !showAccents'>{{showAccents ? "primary" : "accent"}} colors</v-btn>
						</div>
					</div>
				</div>
			</div>
		</v-card>
	</v-dialog>
</template>

<script>
import colors from 'vuetify/es5/util/colors'

export default {
	name: 'color-picker',
	data() {
		return {
			activeGroup: null,
			showAccents: false
		}
	},
	computed: {
		mob(){
			return this.$vuetify.breakpoint.smAndDown
		},
		colorGroups(){
			let out = Object.keys(colors).map(e => e.replace(/([A-Z])+/, ($, $1) => '-' + $1.toLowerCase()))
			return out.slice(0, out.length - 4)
		},
		shades(){
			let out = Object.keys(colors.brown)
			out = out.slice(2, out.length).map(e => ' ' + e.replace(/(\d)/, ($, $1) => '-' + $1))
			out.splice(4, 0, '')
			return out
		},
		accentShades(){
			let out = []
			for (let i = 1; i < 5; i++){
				out.push(` accent-${i}`)
			}
			return out
		},
		color(){
			return this.$vuetify.theme[this.propName]
		}
	},
	props: {
		open: {
			type: Boolean,
			required: true
		},
		propName: String,
	},
	methods: {
		close(){
			this.$emit('update:open', false)
			this.activeGroup = null
			this.showAccents = false
		},
		finalizeColor(shade){
			let g = this.activeGroup.replace(/-([a-zA-Z]){1}/g, ($, $1) => $1.toUpperCase())
			if (!shade) shade = 'base'
			else shade = shade.replace(/-/g, '').trim()
			this.$emit('input', {
				color: colors[g][shade],
				propName: this.propName
			})
			this.close()
		}
	}
}
</script>

<style lang="stylus" scoped>
.group
	display inline-flex
	flex-direction row
	width 100%

.color-groups
	border-radius 2.5px
	overflow hidden
	display flex
	flex-wrap wrap
	flex-direction row
	position relative
	height 240px
	width 240px	
	margin 0 auto
	> .color-group
		width 25%
		height 25%

.color-groups > .shades
	pointer-events none 
	opacity 0
	position absolute
	left 0
	top 0
	right 0
	bottom 0
	display flex
	flex-wrap wrap
	flex-direction row
	transition .28s cubic-bezier(.2,0,.4,1)
	&.active
		pointer-events auto
		opacity 1
		> .details-bar *
			pointer-events auto
	> .shade
		@extend .color-groups > .color-group
		width (100% / 3)
		height (100% / 3)
	> .details-bar
		position absolute
		bottom 0
		left 0
		right 0
		padding-bottom 4px
		pointer-events none
		*
			flex-grow 0 !important
	&.accents
		> .shade
			width 50%
			height 50%
</style>
