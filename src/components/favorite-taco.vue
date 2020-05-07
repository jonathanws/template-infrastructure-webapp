<template>
	<div class="favorite-taco">
		<h3>
			Set your tacos asynchronously with
			<a href="https://vuex.vuejs.org/guide/actions.html">Actions</a>
		</h3>

		<div class="card" :class="{ loading }">
			<div v-if="loading" class="loader-ring"></div>
			<div>Favorite taco:</div>

			<button
				@click="setFavorite(flavors.BEEF)"
				:class="{ selected: isBeefSelected }"
				:disabled="loading"
			>🐮</button>
			<button
				@click="setFavorite(flavors.FISH)"
				:class="{ selected: isFishSelected }"
				:disabled="loading"
			>🐟</button>
			<button
				@click="setFavorite(flavors.PORK)"
				:class="{ selected: isPorkSelected }"
				:disabled="loading"
			>🐷</button>
		</div>
	</div>
</template>

<script>
import fn from '../vuex/functions'
import { flavors } from '../constants/globals.constant'

export default {
	computed: {
		favoriteTaco() {
			return this.$store.state.favorite
		},
		isBeefSelected() {
			return this.favoriteTaco == flavors.BEEF
		},
		isFishSelected() {
			return this.favoriteTaco == flavors.FISH
		},
		isPorkSelected() {
			return this.favoriteTaco == flavors.PORK
		},
	},
	data: () => ({
		flavors,
		loading: false,
	}),
	methods: {
		async setFavorite(flavor) {
			this.loading = true
			await this.$store.dispatch(fn.SET_TACO, flavor)
			this.loading = false
		},
	},
}
</script>

<style lang="scss" scoped>
@import '../styles/_global-constants.scss';

$button-padding: 8px;
button {
	font-size: 1rem;
	padding: $button-padding $button-padding * 1.5;
	background: 0;
	outline: 0;
	border: 2px solid $accent-color;
	border-radius: $border-radius;
	&:hover {
		cursor: pointer;
	}
}

.card {
	display: flex;
	align-items: center;
	position: relative;
	> :not(.loader-ring) {
		margin-right: 16px;
	}
}

.selected {
	background-color: $accent-color;
	color: white;
}

$loader-size: 48px;
.loader-ring {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgba(0, 0, 0, 0.3);
	border-radius: $border-radius;
	&:after {
		content: ' ';
		display: block;
		width: $loader-size;
		height: $loader-size;
		border-radius: 50%;
		border: 6px solid $accent-color;
		border-color: $accent-color transparent $accent-color transparent;
		animation: loader-ring 1s linear infinite;
	}
}
@keyframes loader-ring {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>
