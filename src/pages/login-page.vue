<template>
	<div class="login-page">
		<h1>Login</h1>

		<div class="login-container card">
			<div class="logo-graphic">graphic</div>
			<login-form />
		</div>
	</div>
</template>

<script>
import loginForm from '@/components/login/login-form'

export default {
	name: 'loginPage',
	components: {
		loginForm,
	},
}
</script>

<style lang="scss" scoped>
@import '../styles/_screen-sizes';

.login-page {
	width: 100%;
	padding: 16px;
}

.login-container {
	display: flex;
	> * {
		flex-basis: 100%;
	}
}
.logo-graphic {
	display: none;
	align-items: center;
	justify-content: center;
	margin-right: 16px;
}

@include for-size($tablet-landscape-up) {
	.login-page {
		width: 50%;
	}
	.login-container > * {
		flex-basis: 50%;
	}
	.logo-graphic {
		display: flex;
	}
}
</style>
