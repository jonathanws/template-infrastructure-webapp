<template>
	<div class="pass-taco-parent">
		<h3>
			Pass data from parent to child via
			<a
				href="https://vuejs.org/v2/guide/components-props.html"
				target="_blank"
			>Props</a>
		</h3>

		<div class="side-by-side">
			<div class="card">
				<div>Tortilla:</div>
				<button :class="{ selected: isFlourSelected }" @click="setSelected(tortillas.FLOUR)">🌾</button>
				<button :class="{ selected: isCornSelected }" @click="setSelected(tortillas.CORN)">🌽</button>
			</div>

			<pass-taco-child :flavor="selected" />
		</div>
	</div>
</template>

<script>
import passTacoChild from '../components/pass-taco-child'

import { tortillas } from '../constants/globals.constant'

export default {
	components: {
		passTacoChild,
	},
	computed: {
		isFlourSelected() {
			return this.selected == tortillas.FLOUR
		},
		isCornSelected() {
			return this.selected == tortillas.CORN
		},
	},
	data: () => ({
		selected: tortillas.FLOUR,
		tortillas,
	}),
	methods: {
		setSelected(flavor) {
			this.selected = flavor
		},
	},
}
</script>

<style lang="scss" scoped>
@import '../styles/global-styles.scss';

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
	margin-bottom: 8px;
	&:first-of-type > *:not(:last-child) {
		margin-right: 16px;
	}
}

.side-by-side {
	display: flex;
	flex-direction: column;
}

.selected {
	background-color: $accent-color;
	color: white;
}

// Views for larger window sizes
@include for-size($tablet-portrait-up) {
	.side-by-side {
		flex-direction: row;
		> div {
			flex-basis: 50%;
			&:not(:last-child) {
				margin-right: 16px;
			}
		}
	}
}
// .side-by-side {
// 	border: 3px solid green;
// 	display: flex;
// 	> div {
// 		flex-basis: 50%;
// 		&:not(:last-child) {
// 			margin-right: 16px;
// 		}
// 	}
// }
</style>
