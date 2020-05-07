<template>
	<div class="taco-counter">
		<h3>
			Set your tacos in
			<a href="https://vuex.vuejs.org/guide/state.html">State</a>
		</h3>

		<div class="card">
			<span>I have</span>
			<b>{{ numTacos }}</b>
			<span>{{ tacoText }}</span>

			<div class="tacos">
				<span v-for="(taco, index) in numTacos" :key="index">🌮</span>
			</div>

			<div class="buttons">
				<button @click="decrement">👎</button>
				<button @click="increment">👍</button>
			</div>
		</div>
	</div>
</template>

<script>
import fn from '@/vuex/functions'

export default {
	computed: {
		numTacos() {
			return this.$store.state.tacos
		},
		tacoText() {
			return this.$store.getters[fn.GET_TACO_TEXT]
		},
	},
	methods: {
		increment() {
			this.$store.commit(fn.ADD_TACO)
		},
		decrement() {
			this.$store.commit(fn.REMOVE_TACO)
		},
	},
}
</script>

<style lang="scss" scoped>
@import '../styles/global-styles.scss';

.taco-counter {
}

b {
	margin: 0 6px;
}

button {
	border-radius: $border-radius;
	padding: 8px;
	font-size: 1rem;
	background: none;
	width: 48px;
	border: 2px solid $accent-color;
	outline: 0;
	user-select: none;

	&:hover {
		background-color: $accent-color;
		cursor: pointer;
	}
	&:active {
		background-color: $accent-color-darker;
	}
}

.buttons {
	display: flex;
	> * {
		flex-grow: 1;
	}
	:not(:last-child) {
		margin-right: 16px;
	}
}

.tacos {
	display: flex;
	span {
		font-size: 36px;
		margin: 16px 0;
		&:not(:last-child) {
			margin-right: 20px;
		}
	}
}

@include for-size($tablet-portrait-up) {
	.buttons {
		display: block;
	}
}
</style>
