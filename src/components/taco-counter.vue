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

			<div>
				<button @click="decrement">👎</button>
				<button @click="increment">👍</button>
			</div>
		</div>
	</div>
</template>

<script>
import fn from '@/vuex/functions'

export default {
	data: () => ({}),
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

.card {
	// display: inline-flex;
	// align-items: center;
	display: inline-block;
}

b {
	margin: 0 6px;
	text-align: center;
}

span:last-of-type {
	margin-right: 26px;
}

$button-size: 35px;
button {
	border: 0;
	border-radius: $border-radius;
	padding: 8px;
	font-size: 14px;
	min-height: $button-size;
	min-width: $button-size;
	color: black;
	border: 1px solid $accent-color;
	outline: 0;
	user-select: none;

	&:hover {
		background-color: $accent-color;
		color: white;
		cursor: pointer;
	}
	&:active {
		background-color: $accent-color-darker;
	}
	&:not(:last-child) {
		margin-right: 12px;
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
</style>
