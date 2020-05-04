<template>
	<div class="home-page">
		<taco-counter />

		<favorite-taco />
	</div>
</template>

<script>
import favoriteTaco from '../components/favorite-taco'
import tacoCounter from '../components/taco-counter'

export default {
	name: 'homePage',
	components: {
		favoriteTaco,
		tacoCounter,
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
