<template>
	<div class="topbar-layout">
		<topbar />

		<div class="main-content" :class="routeAlign">
			<slot />
		</div>
	</div>
</template>

<script>
import topbar from '@/components/topbar.vue'

export default {
	components: {
		topbar,
	},
	data: () => ({
		routeAlign: '',
	}),
	mounted() {
		if (this.$route.meta.align) {
			this.routeAlign = this.$route.meta.align
		}
	},
}
</script>

<style lang="scss" scoped>
@import '../styles/global-constants.scss';

.topbar-layout {
	height: 100%;
}

.main-content {
	flex-grow: 1;
	display: flex;
	&.center {
		justify-content: center;
	}
	&.left {
		justify-content: center;
	}
}
</style>
