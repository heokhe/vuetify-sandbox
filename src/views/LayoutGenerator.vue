<template>
	<div>
		<v-toolbar app fixed :clipped-left="drawer.clipped" flat :dense='toolbar.dense'>
			<v-toolbar-side-icon @click.native="showDrawer = !showDrawer"></v-toolbar-side-icon>
			<v-toolbar-title>Layout</v-toolbar-title>
			<v-spacer></v-spacer>
		</v-toolbar>
		<v-navigation-drawer app v-model='showDrawer' :permanent='drawer.permanent' class="elevation-0" :clipped="drawer.clipped">
		</v-navigation-drawer>
		<v-content>
			<v-card class="ma-3 pb-2 px-3">
				<v-container fluid fill-height>
					<v-layout row wrap>
						<v-flex xs12 md6>
							<v-subheader class="pl-0">Footer</v-subheader>
							<layout-checkbox text="Inset" :disabled="!drawer.permanent" :model.sync="footer.inset"></layout-checkbox>
							<v-subheader class="pl-0">Toolbar</v-subheader>
							<layout-checkbox text="Dense" :model.sync="toolbar.dense"></layout-checkbox>
						</v-flex>
						<v-flex xs12 md6>
							<v-subheader class="pl-0">Drawer</v-subheader>
							<layout-checkbox text="Permanent" :model.sync="drawer.permanent"></layout-checkbox>
							<layout-checkbox text="Clipped" :disabled="!drawer.permanent" :model.sync="drawer.clipped"></layout-checkbox>
						</v-flex>
					</v-layout>
				</v-container>
			</v-card>
		</v-content>
		<v-footer fixed class="caption" app :inset='footer.inset'>
			<div class="px-2">
				Copyright &copy; &mdash; Your company
			</div>
		</v-footer>
	</div>
</template>

<script>
import LayoutCheckbox from '../components/LayoutCheckbox.vue'

export default {
	components: {LayoutCheckbox},
	name: 'layout-generator',
	data() {
		return {
			footer: {
				inset: true
			},
			drawer: {
				clipped: false,
				permanent: true,
				overlay: true
			},
			toolbar: {
				dense: false,
			},
			showDrawer: false
		}
	},
	watch: {
		'drawer.permanent'(e){
			if (!e) this.drawer.clipped = false
		}
	}
}
</script>