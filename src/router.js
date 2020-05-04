import Vue from 'vue'
import Router from 'vue-router'

import homePage from '@/pages/home-page.vue'
import pageNotFound from '@/pages/page-not-found-page.vue'
import settingsPage from '@/pages/settings-page'

import { pages } from '@/constants/paths.js'

Vue.use(Router)

const router = new Router({
	routes: [
		{
			path: pages.HOME,
			component: homePage,
			meta: { align: 'center' },
		},
		{
			path: pages.SETTINGS,
			component: settingsPage,
			meta: { align: 'center' },
		},
		/*
		 * 404 - this route should always be last
		 */
		{
			path: pages.PAGE_NOT_FOUND,
			component: pageNotFound,
			meta: { layout: 'no-sidebar' },
		},
	],
})

export default router
