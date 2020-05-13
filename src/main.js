import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/store'

Vue.config.productionTip = false

// Set up our different layouts to be dynamically swapped with global imports.  See App.vue
import defaultLayout from '@/layouts/default-layout.vue'
import fullscreenLayout from '@/layouts/fullscreen-layout.vue'
import topbarLayout from '@/layouts/topbar-layout.vue'
Vue.component('default-layout', defaultLayout)
Vue.component('fullscreen-layout', fullscreenLayout)
Vue.component('topbar-layout', topbarLayout)

// Filters
Vue.filter('capitalize', (value) => (!value ? '' : value.charAt(0).toUpperCase() + value.slice(1)))

new Vue({
	router,
	render: (h) => h(App),
	store,
}).$mount('#app')
