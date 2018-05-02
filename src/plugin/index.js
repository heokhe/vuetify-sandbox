import Vue from 'vue'

import bootstrapTheme from './theme-bootstrap'

Vue.use({
	install(v){
		v.prototype.$$ = {
			bootstrapTheme
		}
	}
})
