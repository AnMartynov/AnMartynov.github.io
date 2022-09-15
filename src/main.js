import 'whatwg-fetch'
import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import Snackbar from './components/snackbar.vue'
import Login from './components/login.vue'
import Search from './components/search.vue'
import Holiday from './components/holiday.vue'
import Tag from './components/tag.vue'
import Source from './components/source.vue'

Vue.component('app-snackbar', Snackbar)
Vue.component('app-login', Login)
Vue.component('app-search', Search)
Vue.component('app-holiday', Holiday)
Vue.component('app-tag', Tag)
Vue.component('app-source', Source)

Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
