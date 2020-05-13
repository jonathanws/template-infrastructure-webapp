<template>
	<div class="login-form">
		<div class="form">
			<login-form-field v-model="name" label="Username" display="Username" />
			<login-form-field v-model="password" label="Password" display="Password" />

			<button @click="login()">Login</button>
		</div>

		<div class="divider" />

		<a href>Forgot password</a>
	</div>
</template>

<script>
import loginFormField from '@/components/login/login-form-field'

import fn from '@/vuex/functions'

export default {
	components: {
		loginFormField,
	},
	data: () => ({
		name: '',
		password: '',
	}),
	methods: {
		login() {
			this.$store.dispatch(fn.LOGIN, { name: this.name, password: this.password })
		},
	},
}
</script>

<style lang="scss" scoped>
@import '../../styles/global-styles';

.login-form {
}

a {
	display: block;
	text-align: center;
}

.form {
	padding: 8px 0;
	display: flex;
	flex-direction: column;
	> *:not(:first-child) {
		margin-top: 24px;
	}
}

.divider {
	border-bottom: 1px solid #d0d0d0;
	margin: 24px 0;
}

$button-padding: 12px;
button {
	font-size: 1rem;
	padding: $button-padding $button-padding * 1;
	outline: 0;
	background-color: $accent-color;
	border-radius: $border-radius;
	color: white;
	&:hover {
		cursor: pointer;
	}
}
</style>
