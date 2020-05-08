<template>
	<div class="welcome-summary">
		<div>Welcome to the Vue Starter project!</div>
		<div>
			Here you will find examples of many common
			<a href="https://vuejs.org/" target="_blank">Vue</a> features, along with common network operations
		</div>
	</div>
</template>

<script>
export default {
	data: () => ({}),
}
</script>

<style lang="scss" scoped>
@import '../styles/global-styles.scss';

.welcome-summary {
	margin-bottom: 64px;
	> div {
		&:first-of-type {
			color: $accent-color;
		}
		&:not(:last-child) {
			margin-bottom: 16px;
		}
	}
}
</style>
