<template>
	<div class="access-denied">
		<h1>403</h1>
		<h2>You do not have the correct permissions to view this page</h2>
	</div>
</template>

<script>
export default {
	name: 'accessDenied',
}
</script>

<style lang="scss" scoped>
.access-denied {
	padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	h1 {
		font-size: 96px;
	}
}
</style>
