<template>
	<div class="styles-page">
		<div class="card">styles explanation</div>

		<set-css-theme-button />
	</div>
</template>

<script>
import setCssThemeButton from '@/components/set-css-theme-button'

export default {
	name: 'stylesPage',
	components: {
		setCssThemeButton,
	},
}
</script>

<style lang="scss" scoped>
@import '../styles/global-styles.scss';
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
