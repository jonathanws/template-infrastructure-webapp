<template>
	<module-list-item
		:button-enabled="enabled"
		:function-name="name"
		:short-description="description"
		@run="getAllTacos"
	/>
</template>

<script>
import moduleListItem from '@/components/module-list-item'

import { getAllTacos } from '@/modules/taco-module'

export default {
	components: {
		moduleListItem,
	},
	data: () => ({
		description: 'Returns all tacos',
		enabled: true, // TODO
		name: 'getAllTacos',
	}),
	methods: {
		getAllTacos() {
			getAllTacos()
		},
	},
}
</script>

<style lang="scss" scoped></style>
