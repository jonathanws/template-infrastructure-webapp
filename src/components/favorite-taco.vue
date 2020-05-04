<template>
	<div class="favorite-taco">
		<h3>
			Set your tacos asynchronously with
			<a href="https://vuex.vuejs.org/guide/actions.html">Actions</a>
		</h3>

		<div class="card">
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

			<i v-if="loading">Loading...</i>
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
	> * {
		margin-right: 16px;
	}
}

.selected {
	background-color: $accent-color;
	color: white;
}
</style>
