<template>
	<module-list-item
		:button-enabled="enabled"
		:function-name="name"
		:short-description="description"
		@run="makeTaco"
	>
		<textarea v-model="args" placeholder="Ingredients JSON object" class="module-arg" />
	</module-list-item>
</template>

<script>
import moduleListItem from '@/components/module-list-item'

import { makeTaco } from '@/modules/taco-module'

export default {
	components: {
		moduleListItem,
	},
	computed: {
		cleanArgs() {
			return JSON.parse(this.args.trim())
		},
	},
	data: () => ({
		args: '',
		description: 'Creates a taco',
		enabled: true, // TODO
		name: 'makeTaco',
	}),
	methods: {
		makeTaco() {
			if (this.cleanArgs) {
				makeTaco(this.cleanArgs)
			}
		},
	},
}
</script>

<style lang="scss" scoped></style>
