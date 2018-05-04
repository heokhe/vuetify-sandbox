<template>
	<v-flex :class='`xs12 md${this.columnWidth}`'>
		<div class="pt-3 px-2 text-xs-center">
			<v-icon :size='50' class="mb-3">{{this.icon}}</v-icon>
			<div class="title">{{this.titleText}}</div>
			<p class="grey--text pt-1 pb-2 caption">
				<slot></slot>
			</p>
		</div>
	</v-flex>
</template>

<script>
export default {
	name: 'feature-card',
	props: {
		icon: String,
		titleText: String,
		columnWidth: {
			type: Number,
			required: false,
			default: 4
		}
	}
}
</script>