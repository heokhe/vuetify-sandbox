import colors from 'vuetify/es5/util/colors'

export default function(obj){
	if (typeof obj === 'string') obj = JSON.parse(obj)

	const getColor = e => {
		let [color, level] = e.split(' ')

		color = color.replace(/-([a-z]{1})/gi, ($, $1) => $1.toUpperCase())

		if (!level) level = 'base'
		else level = level.replace(/-/g, '')

		return colors[color][level]
	}

	let res = {
		dark: obj.dark
	}

	let v = ['primary', 'secondary', 'accent', 'info', 'error', 'warning', 'success']
	
	v.forEach(e => {
		res[e] = {
			className: obj[e],
			color: getColor(e)
		}
	})

	return res
}