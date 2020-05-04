import fn from './functions'

/**
 * Increment number of tacos.  Max value is 10
 */
const addTaco = (state) => {
	if (state.tacos < 10) {
		state.tacos++
	}
}

/**
 * Decrement number of tacos.  Min value is 1
 */
const removeTaco = (state) => {
	if (state.tacos > 1) {
		state.tacos--
	}
}

/**
 * Set your favorite type of taco
 *
 * @param {String} flavor - fish | beef | pork
 */
const setFavoriteTaco = (state, flavor) => {
	state.favorite = flavor
}

export default {
	[fn.ADD_TACO]: addTaco,
	[fn.REMOVE_TACO]: removeTaco,
	[fn.SET_FAVORITE_TACO]: setFavoriteTaco,
}
