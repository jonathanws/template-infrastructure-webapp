import fn from './functions'

/**
 * Gets the correct pluralization of taco/tacos
 *
 * @returns String with the correct pluralization of taco/tacos
 */
const getTacoText = (state) => (state.tacos == 1 ? 'taco' : 'tacos')

export default {
	[fn.GET_TACO_TEXT]: getTacoText,
}
