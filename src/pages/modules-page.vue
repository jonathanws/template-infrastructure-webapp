<template>
	<div class="modules-page">
		<div class="card">Modules explanation</div>

		<modules-display />
	</div>
</template>

<script>
import modulesDisplay from '@/components/modules-display'

export default {
	name: 'modulesPage',
	components: {
		modulesDisplay,
	},
}
</script>

<style lang="scss" scoped>
@import '../styles/_global-constants';
@import '../styles/_screen-sizes';

.modules-page {
	width: 100%;
	padding: 16px;
}

@include for-size($tablet-landscape-up) {
	.modules-page {
		width: 75%;
	}
}
@include for-size($desktop-up) {
	.modules-page {
		width: 50%;
	}
}
</style>
