<template>
	<module-list-item
		:button-enabled="enabled"
		:function-name="name"
		:short-description="description"
		@run="getTaco"
	>
		<textarea v-model="tacoId" placeholder="Taco ID" class="module-arg" />
	</module-list-item>
</template>

<script>
import moduleListItem from '@/components/module-list-item'

import { getTaco } from '@/modules/taco-module'

export default {
	components: {
		moduleListItem,
	},
	computed: {
		cleanTacoId() {
			return this.tacoId.trim()
		},
	},
	data: () => ({
		tacoId: '',
		description: 'Returns a taco',
		enabled: true, // TODO
		name: 'getTaco',
	}),
	methods: {
		getTaco() {
			if (this.cleanTacoId) {
				getTaco(this.cleanTacoId)
			}
		},
	},
}
</script>

<style lang="scss" scoped></style>
