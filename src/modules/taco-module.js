/**
 * Taco module
 *
 * All logic pertaining to tacos goes here
 */
import { api } from '@/constants/globals.constant'

export { eatTaco, getTaco, getAllTacos, makeTaco, updateTaco }

/**
 * This backend object consists of nothing but calls to related routes on our backend.
 * To use this object, create another function that makes use of these function calls.
 * This ensures that all functions have the ability to chain network calls, and keeps
 * similar functionality grouped together
 */
const backend = {
	//	GET		/tacos/{tacoId}
	getTaco: (tacoId) => api.get(`/tacos/${tacoId}`),
	//	GET		/tacos
	getTacos: () => api.get('/tacos'),
	//	DELETE	/tacos/{tacoId}
	deleteTaco: (tacoId) => api.delete(`/tacos/${tacoId}`),
	//	POST	/tacos
	createTaco: (ingredients) => api.post('/tacos', ingredients),
	//	POST	/taco
	updateTaco: (tacoId, updates) => api.post(`/taco/${tacoId}`, updates),
}

/**
 * Eats a taco
 *
 * @param {Number} tacoId - ID of the taco to get
 */
const eatTaco = async (tacoId) => {
	if (tacoId) {
		// Try / catch is not needed here because we aren't sending anything back if we hit an error
		await backend.deleteTaco()
	} else {
		console.error('No taco ID specified.')
	}
}

/**
 * Gets a single taco
 *
 * @param {Number} tacoId - ID of the taco to get
 */
const getTaco = async (tacoId) => {
	let res

	try {
		res = await backend.getTaco(tacoId)
	} catch (e) {
		console.error(e)
		res = {}
	}

	return res
}

/**
 * Gets all of the tacos
 *
 * @return {Array} Array of tacos
 */
const getAllTacos = async () => {
	let res

	try {
		res = await backend.getTacos()
	} catch (e) {
		console.error(e)
		res = []
	}

	return res
}

/**
 * Makes a taco
 *
 * @param {Object} ingredients - Ingredients for the taco
 * @param {String} ingredients.meat
 * @param {Boolean} ingredients.salsa
 * @param {Boolean} ingredients.tortilla
 */
const makeTaco = async (ingredients) => {
	if (ingredients) {
		let res

		try {
			const newTacoId = await backend.createTaco().tacoId
			res = await backend.getTaco(newTacoId)
		} catch (e) {
			console.error(e)
			res = {}
		}

		return res
	} else {
		console.error('No ingredients specified')
	}
}

/**
 * updates a taco
 *
 * @param {Object} ingredients - Ingredients for the taco
 * @param {String} ingredients.meat
 * @param {Boolean} ingredients.salsa
 * @param {Boolean} ingredients.tortilla
 * @param {Number} tacoId - ID of the taco to update
 */
const updateTaco = async (ingredients, tacoId) => {
	if (tacoId && ingredients) {
		// Try / catch is not needed here because we aren't sending anything back if we hit an error
		await backend.updateTaco(tacoId, ingredients)
	} else {
		if (!tacoId) {
			console.error('No Taco ID specified')
		}
		if (!ingredients) {
			console.error('No ingredients updates specified')
		}
	}
}
