<template>
	<div class="card module-list-item">
		<div class="header" @click="toggleExpand()">
			<pre>{{ name }}</pre>
			<div>{{ shortDescription }}</div>
		</div>

		<div v-if="expanded" class="args">
			<slot />
			<button :disabled="!buttonEnabled" @click="run()">Run</button>
		</div>

	</div>
</template>

<script>
export default {
	props: {
		buttonEnabled: {
			type: Boolean,
			required: false,
			default: true,
		},
		functionName: {
			type: String,
			required: true,
		},
		shortDescription: {
			type: String,
			required: false,
		},
	},
	computed: {
		name() {
			return `${this.functionName}()`
		},
	},
	data: () => ({
		expanded: false,
	}),
	methods: {
		toggleExpand() {
			this.expanded = !this.expanded
		},
		run() {
			console.log('running')
			this.$emit('run')
		},
	},
}
</script>

<style lang="scss" scoped>
@import '../styles/global-styles.scss';

.module-list-item {
}

$button-padding: 8px;
button {
	color: white;
	font-size: 1rem;
	padding: $button-padding $button-padding * 1.5;
	margin-top: 8px;
	background: $accent-color;
	outline: 0;
	border: 2px solid $accent-color;
	border-radius: $border-radius;
	&:disabled {
		border: 4px solid tomato;
	}
	&:hover {
		cursor: pointer;
	}
}

pre {
	font-family: courier;
	margin: 0;
	padding: 6px 12px;
	border-radius: $border-radius;
}

.header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	&:hover {
		cursor: pointer;
	}
}

.args {
	margin-top: 8px;
}
</style>
