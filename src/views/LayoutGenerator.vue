<template>
	<div ref='root'>
		<v-toolbar app fixed :clipped-left="drawer.clipped" flat :dense='toolbar.dense'>
			<v-toolbar-side-icon @click.native="showDrawer = !showDrawer"></v-toolbar-side-icon>
			<v-toolbar-title>Layout</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-btn flat to='/' small>
				Back to home
			</v-btn>
		</v-toolbar>
		<v-navigation-drawer app :temporary='!drawer.permanent' v-model='showDrawer' :clipped="drawer.clipped" :permanent="drawer.permanent" :floating="drawer.floating" ref='drawer'>
		  
		</v-navigation-drawer>
		<v-content>
			<v-card class="ma-3 py-2">
				<v-list subheader two-line>
					<v-subheader>Navigation Drawer</v-subheader>
					<v-list-tile>
						<v-list-tile-action>
							<v-checkbox v-model="drawer.permanent"></v-checkbox>
						</v-list-tile-action>
						<v-list-tile-content>
							<v-list-tile-title>Always visible (permanent)</v-list-tile-title>
						  	<v-list-tile-sub-title>Make drawer visibile on any screen</v-list-tile-sub-title>
						</v-list-tile-content>
					</v-list-tile>
					<v-list-tile :disabled='!drawer.permanent'>
						<v-list-tile-action>
							<v-checkbox v-model="drawer.clipped"></v-checkbox>
						</v-list-tile-action>
						<v-list-tile-content>
							<v-list-tile-title>Clipped</v-list-tile-title>
						  	<v-list-tile-sub-title>Make toolbar come over drawer (has no effect on temporary drawers)</v-list-tile-sub-title>
						</v-list-tile-content>
					</v-list-tile>
					<v-list-tile>
						<v-list-tile-action>
							<v-checkbox v-model="drawer.floating"></v-checkbox>
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
							<v-checkbox v-model="toolbar.dense"></v-checkbox>
						</v-list-tile-action>
						<v-list-tile-content>
							<v-list-tile-title>Dense toolbar</v-list-tile-title>
							<v-list-tile-sub-title>Reduce toolbar height</v-list-tile-sub-title>
						</v-list-tile-content>
					</v-list-tile>
					<v-divider></v-divider>
					<v-subheader>Footer</v-subheader>
					<v-list-tile :disabled="!drawer.permanent">
						<v-list-tile-action>
							<v-checkbox v-model="footer.inset"></v-checkbox>
						</v-list-tile-action>
						<v-list-tile-content>
							<v-list-tile-title>Inset footer</v-list-tile-title>
							<!-- <v-list-tile-sub-title>Reduce toolbar height</v-list-tile-sub-title> -->
						</v-list-tile-content>
					</v-list-tile>
				</v-list>
			</v-card>
		</v-content>
		<v-footer class="caption" app :inset='footer.inset' ref='footer'>
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
			footer: {
				inset: true,
				appendToDrawer: false
			},
			drawer: {
				clipped: false,
				floating: false,
				permanent: false
			},
			toolbar: {
				dense: false,
			},
			showDrawer: false
		}
	}
}
</script>