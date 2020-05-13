<template>
	<div class="styles-page">styles</div>
</template>

<script>
export default {
	name: 'stylesPage',
}
</script>

<style lang="scss" scoped>
@import '../styles/_global-constants';
@import '../styles/_screen-sizes';

.styles-page {
	width: 100%;
	padding: 16px;
}

@include for-size($tablet-landscape-up) {
	.styles-page {
		width: 75%;
	}
}
@include for-size($desktop-up) {
	.styles-page {
		width: 50%;
	}
}
</style>
