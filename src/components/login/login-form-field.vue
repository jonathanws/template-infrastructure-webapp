<template>
	<div class="login-form-field">
		<div class="label">{{ label }}</div>
		<input :placeholder="display" :type="type" @input="notifyParent($event)" />
	</div>
</template>

<script>
export default {
	props: {
		display: {
			type: String,
			required: false,
			default: '',
		},
		label: {
			type: String,
			required: true,
			default: '',
		},
	},
	computed: {
		isPassword() {
			return this.label.toLowerCase() == 'password'
		},
		type() {
			return this.isPassword ? 'password' : 'text'
		},
	},
	data: () => ({
		value: '',
	}),
	methods: {
		notifyParent(event) {
			this.$emit('input', event.target.value)
		},
	},
}
</script>

<style lang="scss" scoped>
@import '../../styles/global-styles.scss';

.login-form-field {
}

input {
	font-size: 1rem;
	width: 100%;
	padding: 12px 16px;
	border: 0;
	background-color: #e8e8e8;
	border-radius: $border-radius;
}

.label {
	font-size: 0.8rem;
	opacity: 0.7;
	margin-bottom: 6px;
}
</style>
