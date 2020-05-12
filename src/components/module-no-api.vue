<template>
	<div class="module-no-api card">
		<div>API not configured</div>
		<div>Configure the Axios object found in globals.constant.js</div>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.module-no-api {
	background-color: tomato;
	color: white;
	> div {
		&:first-child {
			margin-bottom: 12px;
		}
		&:not(:first-child) {
			opacity: 0.9;
		}
	}
}
</style>
