<template>
	<div class="settings-page">
		<h3>Settings</h3>

		<h4>Appearance</h4>

		<div class="card">
			<div class="settings-list-item">
				<div class="values">
					<div class="key">Settings</div>
					<span class="value">who knows</span>
				</div>
				<div class="action">
					something
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'settingsPage',
}
</script>

<style lang="scss" scoped>
@import '../styles/_global-constants';
@import '../styles/_screen-sizes';

.settings-page {
	width: 100%;
	padding: 16px;
}

.settings-list-item {
	display: flex;
	align-items: center;
	padding: 16px 0;
	margin: 0 16px;
	&:not(:first-child) {
		border-top: 1px solid dodgerblue;
	}
	> :first-child {
		flex-grow: 1;
	}
	> :not(:first-child) {
		margin-left: 16px;
	}
}

@include for-size($tablet-landscape-up) {
	.settings-page {
		width: 75%;
	}
}
@include for-size($desktop-up) {
	.settings-page {
		width: 50%;
	}
}
</style>
