<template>
	<div class="topbar">
		<div class="logo">
			<router-link :to="pages.HOME">
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
	a {
		display: flex;
		align-items: center;
	}
	i {
		color: $accent-color;
	}
	h2 {
		display: none;
		margin-left: 16px;
	}
}

.links {
	// border: 1px solid green;
	flex-grow: 1;
	.link {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 8px;
		border-radius: $border-radius;
		&:hover {
			cursor: pointer;
		}
		div {
			display: none;
			margin-left: 12px;
		}
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
