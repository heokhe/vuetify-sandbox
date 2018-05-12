<template>
	<div ref='root'>
		<v-toolbar app fixed :clipped-left="l.drawer.clipped" :dense='l.toolbar.dense'>
			<v-toolbar-side-icon @click.native="showDrawer = !showDrawer"></v-toolbar-side-icon>
			<v-toolbar-title>Layout</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-btn flat to='/' small>
				Back to home
			</v-btn>
		</v-toolbar>
		<v-navigation-drawer app :temporary='!l.drawer.permanent' v-model='showDrawer' :clipped="l.drawer.clipped" :permanent="l.drawer.permanent" :floating="l.drawer.floating"></v-navigation-drawer>
		<v-content>
			<v-card class="ma-3">
				<v-tabs color="transparent" slider-color="primary">
					<v-tab>
						Controls
					</v-tab>
					<v-tab>
						Output code
					</v-tab>
					<v-tab-item>
						<v-list subheader two-line>
							<v-subheader>Navigation Drawer</v-subheader>
							<v-list-tile>
								<v-list-tile-action>
									<v-checkbox v-model="l.drawer.permanent"></v-checkbox>
								</v-list-tile-action>
								<v-list-tile-content>
									<v-list-tile-title>Always visible (permanent)</v-list-tile-title>
									<v-list-tile-sub-title>Make drawer visibile on any screen</v-list-tile-sub-title>
								</v-list-tile-content>
							</v-list-tile>
							<v-list-tile :disabled='!l.drawer.permanent'>
								<v-list-tile-action>
									<v-checkbox v-model="l.drawer.clipped"></v-checkbox>
								</v-list-tile-action>
								<v-list-tile-content>
									<v-list-tile-title>Clipped</v-list-tile-title>
									<v-list-tile-sub-title>Make toolbar come over drawer (has no effect on temporary drawers)</v-list-tile-sub-title>
								</v-list-tile-content>
							</v-list-tile>
							<v-list-tile>
								<v-list-tile-action>
									<v-checkbox v-model="l.drawer.floating"></v-checkbox>
								</v-list-tile-action>
								<v-list-tile-content>
									<v-list-tile-title>Floating drawer</v-list-tile-title>
									<v-list-tile-sub-title>Hide drawer border</v-list-tile-sub-title>
								</v-list-tile-content>
							</v-list-tile>
							<v-divider></v-divider>
							<v-subheader>Toolbar</v-subheader>
							<v-list-tile>
								<v-list-tile-action>
									<v-checkbox v-model="l.toolbar.dense"></v-checkbox>
								</v-list-tile-action>
								<v-list-tile-content>
									<v-list-tile-title>Dense toolbar</v-list-tile-title>
									<v-list-tile-sub-title>Reduce toolbar height</v-list-tile-sub-title>
								</v-list-tile-content>
							</v-list-tile>
							<v-divider></v-divider>
							<v-subheader>Footer</v-subheader>
							<v-list-tile :disabled="!l.drawer.permanent">
								<v-list-tile-action>
									<v-checkbox v-model="l.footer.inset"></v-checkbox>
								</v-list-tile-action>
								<v-list-tile-content>
									<v-list-tile-title>Inset footer</v-list-tile-title>
									<!-- <v-list-tile-sub-title>Reduce toolbar height</v-list-tile-sub-title> -->
								</v-list-tile-content>
							</v-list-tile>
						</v-list>					  
					</v-tab-item>
					<v-tab-item>
						<code class="code">
							{{output}}
						</code>
					</v-tab-item>
				</v-tabs>
			</v-card>
		</v-content>
		<v-footer class="caption" app :inset='l.footer.inset'>
			<div class="px-2">
				Copyright &copy; &mdash; Your company
			</div>
		</v-footer>
	</div>
</template>

<script>

export default {
	name: 'layout-generator',
	data() {
		return {
			l: {
				footer: {
					inset: true
				},
				drawer: {
					clipped: false,
					floating: false,
					permanent: false
				},
				toolbar: {
					dense: false,
				}
			},
			showDrawer: false
		}
	},
	computed: {
		output(){
			const attrs = {
				dense: this.l.toolbar.dense ? ' dense' : '',
				clippedLeft: this.l.drawer.clipped ? ' clipped-left' : '',
				drawer: Object.keys(this.l.drawer).filter(e => this.l.drawer[e] === true).join(' ')
			}
			return `
<v-app>
	<v-toolbar${attrs.dense} fixed app${attrs.clippedLeft}></v-toolbar>
	<v-navigation-drawer app ${attrs.drawer}></v-navigation-drawer>
	<v-content>
		Your main content
	</v-content>
	<v-footer class="caption" app${this.l.footer.inset ? ' inset' : ''}>
		<div class="px-2">
			Copyright &copy; &mdash; Your company
		</div>
	</v-footer>
</v-app>`
		}
	},
	created(){
		this.l = JSON.parse(localStorage.getItem('layout--obj')) || this.l
		this.$watch('l', (e) => {
			localStorage.setItem('layout--obj', JSON.stringify(e))

			if (!e.drawer.permanent){
				e.drawer.clipped = false
			}
		}, {
			deep: true,
			immediate: true
		})
	}
}
</script>
<style lang="stylus" scoped>
.code
	color inherit
	display block
	margin 16px
	background 0
	margin-top -1em
	box-shadow none
	font-weight normal
</style>
