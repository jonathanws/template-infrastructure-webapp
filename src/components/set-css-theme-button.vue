<template>
	<div class="setCssThemeButton">
		<div>{{ theme }}</div>

		<div class="theme-buttons">
			<button
				v-for="cssTheme in cssThemes"
				:key="cssTheme"
				:class="{ selected: isSelected(cssTheme) }"
				@click="setTheme(cssTheme)"
			>{{ capitalize(cssTheme) }}</button>
		</div>
	</div>
</template>

<script>
import fn from '@/vuex/functions'

import { cssThemes } from '@/constants/globals.constant'

export default {
	data: () => ({
		cssThemes: [cssThemes.BLUE, cssThemes.DARK, cssThemes.LIGHT],
	}),
	computed: {
		theme() {
			return this.$store.state.cssTheme
		},
	},
	methods: {
		capitalize: (s) => `${s.charAt(0).toUpperCase()}${s.slice(1)}`,
		isSelected(t) {
			return t == this.theme
		},
		setTheme(t) {
			this.$store.commit(fn.SET_CSS_THEME, t)
		},
	},
}
</script>

<style lang="scss" scoped>
@import '../styles/global-styles';

$button-padding: 8px;
button {
	border: 1px solid $accent-color;
	border-radius: $border-radius;
	padding: $button-padding $button-padding * 1.5;
	font-size: 1rem;
	&:hover {
		cursor: pointer;
	}
	&.selected {
		background-color: $accent-color;
		color: white;
	}
}

.theme-buttons {
	display: flex;
	justify-content: space-around;
}
</style>
