<template>
	<div class="modules-page">
		<div class="summary">
			<div>
				This page shows how you can consume a module to talk to a backend API. To see specifics, look at any of the functions in the
				<b>taco-functions/</b> directory.
			</div>
			<div>Click on any function to run it</div>
		</div>

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

.summary {
	margin-bottom: 32px;
	> div:not(:last-child) {
		margin-bottom: 8px;
	}
	b {
		background-color: #dddddd;
		padding: 2px 6px;
		border-radius: $border-radius;
		font-family: 'Courier New', Courier, monospace;
	}
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
