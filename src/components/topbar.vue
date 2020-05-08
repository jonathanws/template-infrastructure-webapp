<template>
	<div class="topbar">
		<div class="logo link">
			<router-link :to="pages.HOME" tag="div">
				<h2>Vue Starter</h2>
			</router-link>
		</div>

		<div class="links">
			<router-link
				v-for="(link, index) in links"
				tag="div"
				:key="index"
				:to="link.to"
				class="link"
			>{{ link.text }}</router-link>
		</div>

		<!-- <div class="actions">
			<button>Login</button>
		</div>-->
	</div>
</template>

<script>
import { pages } from '@/constants/paths'

export default {
	name: 'topbar',
	data: () => ({
		links: [{ text: 'Settings', to: pages.SETTINGS }],
		pages,
	}),
}
</script>

<style lang="scss" scoped>
@import '../styles/_global-constants';
@import '../styles/_screen-sizes';

.topbar {
	// border: 1px solid pink;
	display: flex;
	align-items: center;
	height: $topbar-size;
	padding: 0 32px;
}

.logo {
		color: $accent-color;
	}

.links {
	display: flex;
	justify-content: flex-end;
	flex-grow: 1;
	.link {
		display: flex;
		align-items: center;
		padding: 16px;
		// When the link matches the view the user is currently viewing
		&.router-link-exact-active {
			$border-size: 6px;
			border-bottom: $border-size solid $accent-color;
			margin-top: $border-size;
		}
	}
}

.link {
		&:hover {
			cursor: pointer;
		}
}

// @include for-size($tablet-portrait-up) {
// // 	.links .link {
// // 		padding: 8px 16px;
// // 		div {
// // 			display: block;
// // 		}
// // 	}
// // }

// // @include for-size($tablet-landscape-up) {
// // 	.logo h2 {
// // 		display: block;
// // 	}
// // }
</style>
