<template>
	<module-list-item
		:button-enabled="enabled"
		:function-name="name"
		:short-description="description"
		@run="eatTaco"
	>
		<textarea v-model="tacoId" placeholder="Taco ID" class="module-arg" />
	</module-list-item>
</template>

<script>
import moduleListItem from '@/components/module-list-item'

import { eatTaco } from '@/modules/taco-module'

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
		description: 'Deletes a taco',
		enabled: true, // TODO
		name: 'eatTaco',
	}),
	methods: {
		eatTaco() {
			if (this.cleanTacoId) {
				eatTaco(this.cleanTacoId)
			}
		},
	},
}
</script>

<style lang="scss" scoped></style>
