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
 * Sets the theme of the app.  Must be with a value that's defined in globals.constant.js
 * Must also be set in TODO
 *
 * @param {String} theme - Name of the css class that is applied to the body tag in App.vue
 */
const setCssTheme = (state, theme) => {
	// Only set a theme if it's a theme that we recognize
	if (theme) {
		state.cssTheme = theme
	} else {
		console.error(`CSS theme is not defined in globals.constant.js: ${theme}`)
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
	[fn.SET_CSS_THEME]: setCssTheme,
	[fn.SET_FAVORITE_TACO]: setFavoriteTaco,
}
