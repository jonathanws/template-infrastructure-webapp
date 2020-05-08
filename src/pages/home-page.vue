<template>
	<div class="home-page">
		<welcome-summary />

		<taco-counter />

		<favorite-taco />

		<pass-taco-parent />
	</div>
</template>

<script>
import favoriteTaco from '../components/favorite-taco'
import passTacoParent from '../components/pass-taco-parent'
import tacoCounter from '../components/taco-counter'
import welcomeSummary from '../components/welcome-summary'

export default {
	name: 'homePage',
	components: {
		favoriteTaco,
		passTacoParent,
		tacoCounter,
		welcomeSummary,
	},
}
</script>

<style lang="scss" scoped>
@import '../styles/_global-constants';
@import '../styles/_screen-sizes';

.home-page {
	width: 100%;
	padding: 16px;
}

@include for-size($tablet-landscape-up) {
	.home-page {
		width: 75%;
	}
}
@include for-size($desktop-up) {
	.home-page {
		width: 50%;
	}
}
</style>
