import { sleep } from '../modules/common-module'

import fn from './functions'

const login = async ({ commit }, credentials) => {
	console.log('logging in', credentials)
	commit(fn.SET_IS_LOGGED_IN, true)
}

/**
 * Asynchronously set your favorite taco
 *
 * @param {String} flavor - The flavor of the taco
 */
const setTaco = async ({ commit }, flavor) => {
	await sleep(2000)
	commit(fn.SET_FAVORITE_TACO, flavor)
}

export default {
	[fn.LOGIN]: login,
	[fn.SET_TACO]: setTaco,
}
