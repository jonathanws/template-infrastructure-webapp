import Vue from 'vue'
import Router from 'vue-router'

import homePage from '@/pages/home-page.vue'
import loginPage from '@/pages/login-page.vue'
import pageNotFound from '@/pages/page-not-found-page.vue'
import modulesPage from '@/pages/modules-page'
import stylesPage from '@/pages/styles-page'

import { pages } from '@/constants/paths.js'
import store from '@/vuex/store'

Vue.use(Router)

const router = new Router({
	routes: [
		{
			path: pages.HOME,
			component: homePage,
			meta: { align: 'center' },
		},
		{
			path: pages.LOGIN,
			component: loginPage,
			meta: { align: 'center', layout: 'topbar' },
		},
		{
			path: pages.STYLES,
			component: stylesPage,
			meta: { align: 'center' },
		},
		{
			path: pages.MODULES,
			component: modulesPage,
			meta: { align: 'center' },
		},
		/*
		 * 404 - this route should always be last
		 */
		{
			path: pages.PAGE_NOT_FOUND,
			component: pageNotFound,
			meta: { layout: 'fullscreen' },
		},
	],
})

/**
 * This function is called every time a user changes the url.
 * Currently checks if the route they are trying to access requires being logged in.
 * If it does, it redirects the user.
 */
router.beforeEach((to, from, next) => {
	// These pages are open to the public.  No auth necessary
	const publicPages = [pages.LOGIN, pages.PAGE_NOT_FOUND]

	// 'path' is what the user is trying to access right now.
	// This determines if we need to worry about them being logged in.
	const requiresLogin = !publicPages.includes(to.path)

	// If this page requires login, and they are NOT logged in, redirect them
	if (requiresLogin && !store.state.isLoggedIn) {
		next(pages.LOGIN)
	} else {
		next()
	}
})

export default router
