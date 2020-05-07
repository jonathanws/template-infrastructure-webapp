<template>
	<div class="card">
		<b>{{ capitalizedFlavor }}</b>
		<div>tortilla!</div>
	</div>
</template>

<script>
export default {
	props: {
		flavor: {
			type: String,
			required: true,
		},
	},
	computed: {
		capitalizedFlavor() {
			return !this.flavor
				? ''
				: `${this.flavor
						.trim()
						.charAt(0)
						.toUpperCase()}${this.flavor.slice(1)}`
		},
	},
	data: () => ({}),
}
</script>

<style lang="scss" scoped>
@import '../styles/global-styles.scss';
b {
	color: $accent-color;
	margin-right: 4px;
}

.card {
	display: flex;
	justify-content: center;
}
</style>
