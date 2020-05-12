<template>
	<div class="modules-display">
		<module-no-api v-if="hasBaseUrl" />

		<taco-module-functions />

		<!-- Other modules... -->
	</div>
</template>

<script>
import moduleNoApi from '@/components/module-no-api'
import tacoModuleFunctions from '@/components/taco-module-functions'

import { api } from '@/constants/globals.constant'

export default {
	components: {
		moduleNoApi,
		tacoModuleFunctions,
	},
	computed: {
		hasBaseUrl: () => !!api.defaults.baseURL,
	},
}
</script>

<style lang="scss" scoped></style>
