<template>
	<div>
		<module-list-item
			:button-enabled="enabled"
			:function-name="name"
			:short-description="description"
			@run="eatTaco"
		>
			<textarea v-model="tacoId" placeholder="Taco ID" class="module-arg" />
			<textarea v-model="tacoUpdates" placeholder="Ingredients JSON object" class="module-arg" />
		</module-list-item>
	</div>
</template>

<script>
import moduleListItem from '@/components/module-list-item'

import { updateTaco } from '@/modules/taco-module'

export default {
	components: {
		moduleListItem,
	},
	computed: {
		cleanTacoId() {
			return this.tacoId.trim()
		},
		cleanTacoUpdates() {
			return JSON.parse(this.tacoUpdates.trim())
		},
	},
	data: () => ({
		enabled: true, // TODO
		description: 'Updates a taco',
		name: 'updateTaco',
		tacoId: '',
		tacoUpdates: '',
	}),
	methods: {
		eatTaco() {
			if (this.cleanTacoId) {
				updateTaco(this.cleanTacoId, this.cleanTacoUpdates)
			}
		},
	},
}
</script>

<style lang="scss" scoped></style>
