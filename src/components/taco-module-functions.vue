<template>
	<div class="taco-module-functions">
		<h3>Taco Module</h3>

		<taco-func-eat-taco />

		<taco-func-get-taco />

		<taco-func-get-all-tacos />

		<taco-func-make-taco />

		<taco-func-update-taco />
	</div>
</template>

<script>
import tacoFuncEatTaco from '@/components/taco-functions/taco-func-eat-taco'
import tacoFuncGetTaco from '@/components/taco-functions/taco-func-get-taco'
import tacoFuncGetAllTacos from '@/components/taco-functions/taco-func-get-all-tacos'
import tacoFuncMakeTaco from '@/components/taco-functions/taco-func-make-taco'
import tacoFuncUpdateTaco from '@/components/taco-functions/taco-func-update-taco'

export default {
	components: {
		tacoFuncGetAllTacos,
		tacoFuncEatTaco,
		tacoFuncGetTaco,
		tacoFuncMakeTaco,
		tacoFuncUpdateTaco,
	},
}
</script>

<style lang="scss" scoped>
.taco-module-functions > *:not(:last-child) {
	margin-bottom: 12px;
}
</style>
